import { getListQuote, getRandomQuote } from "../src/lib.ts";
import { assert } from "../deps.ts";

Deno.test("getListQuote", async () => {
  const result = await getListQuote();
  assert(result);
});

Deno.test("getListQuoteWithParams", async () => {
  const params = {
    filter: "hello",
  };
  const result = await getListQuote(params);
  assert(result);
});

Deno.test("getRandomQuote", async () => {
  const result = await getRandomQuote();
  assert(result);
});
