import { getListQuote, getRandomQuote } from "./src/lib.ts";

async function favQuote() {
  const argsList = Deno.args;

  if (argsList) {
    const item = argsList[0];

    if (item) {
      if (
        item === "--help" || item === "-h" ||
        item === "help"
      ) {
        const helpText = getHelpText();
        console.log(helpText);
      }

      if (item === "--version" || item === "-v" || item === "version") {
        console.log("v0.1.4");
      }

      if (item === "--list-quote" || item === "-lq" || item === "list-quote") {
        const filterWord = argsList[1];

        let params = {};
        if (filterWord) {
          params = {
            filter: filterWord,
          };
        }
        const result = await getListQuote(params);
        console.log(result);
      }

      if (
        item === "--random-quote" || item === "-rq" || item === "random-quote"
      ) {
        const result = await getRandomQuote();
        console.log(result);
      }
    } else {
      const helpText = getHelpText();
      console.log(helpText);
    }
  }
}

function getHelpText() {
  return `
favQuote

Usage
    $ favQuote [options]

Options
    --help -h help                            Show help
    --version -v version                      Show version
    --list-quote -lq list-quote <filterWord>  Get list of qoute / Get list of quote with word
    --random-quote -rq random-quote           Get random qoute
  `;
}

favQuote();
