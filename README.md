# favQuote-cli

Get favourite or random quote cli

```
$ deno install --allow-net -f --name favQuote https://deno.land/x/favQuote_cli/main.ts
```

```
favQuote --help

Usage
    $ favQuote --help
    $ favQuote --list-quote [filterWord]
    $ favQuote --random-quote

Options
    --help                      Show help
    --list-quote [filterWord]   Get list of qoute / Get list of quote with word
    --random-quote              Get random qoute

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
```

## Requirement:
 - install deno (1.0.2)

## Testing and run:
```
// install deps
$ deno cache main.ts

// run in local
$ deno run --allow-net main.ts --help

// allow all permission
$ deno run -A main.ts --help

// run test case
$ deno test --allow-net

// format code
$ deno fmt

// build cli
$ deno install --allow-net -f --name favQuote main.ts
```

