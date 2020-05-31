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
        console.log("v0.1.3");
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
    $ favQuote --help
    $ favQuote --version
    $ favQuote --list-quote [filterWord]
    $ favQuote --random-quote

Options
    --help, -h, help                            Show help
    --version, -v, version                      Show version
    --list-quote, -lq, list-quote [filterWord]  Get list of qoute / Get list of quote with word
    --random-quote, -rq, random-quote           Get random qoute

Examples
$ favQuote --list-quote
1 - Being Irish, he had an abiding sense of tragedy, which sustained him through temporary periods of joy.
2 - Whoever is happy will make others happy too.
...

$ favQuote --list-quote hello
1 - I grew up where my parents would literally shove me in the car rather than have to say hello to a neighbor.
2 - Sometimes just when I say hello the right way, I'm like, 'Whoa, I'm so cool.'
...

$ favQuote --random-quote
Every positive value has its price in negative terms... the genius of Einstein leads to Hiroshima.
  `;
}

favQuote();
