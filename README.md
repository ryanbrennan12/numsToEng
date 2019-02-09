
 [![npm (scoped)](https://img.shields.io/badge/npm%20-v1.0.3-blue.svg)](https://github.com/ryanbrennan12)

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install nums2eng
```

## Usage

```js
const convert = require('nums2eng');

convert(4444)
//=> four thousand four hundred forty four

convert('Hey my dude, I am string');

//=> Uncaught TypeError: feed numsToEng a NUMBER!

```


## Features
  * It takes a number and gives you back English words; pretty straightforward
  * Up into the billions...
  * More cool features to come.