# Sumov

Computes the sum of all numeric values in an (multilevel) object

## Usage

```js
var sumov = require('sumov');
var sum = sumov({a: 2, b: ["2", null, [], {a: {a: -1.0}}], c: {quick: "maths"}});
// => 3
```

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm i --save sumov
```

See the [package source](https://github.com/dimitrievski/sumov) for more details.
