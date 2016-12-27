<p align="center">
	<a href="https://github.com/tiaanduplessis/blink-element"><img width="75%" src="media/blink.gif" alt="Blink - Simple module to make DOM element blink"></a>
</p>


# blink-element 
[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
[![Build Status](https://travis-ci.org/tiaanduplessis/blink-element.svg?branch=master)](https://travis-ci.org/tiaanduplessis/blink-element)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> Simple module to make DOM element blink

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Contribute](#contribute)
- [License](#license)


## Install

```sh
$ npm install --save blink-element
```

```sh
$ yarn add blink-element
```

## Usage

Add the `blink.js` or `blink.min.js` script to your project. You can then use it by calling the `blink` function.

```js
// var blink = require('blink-element') || import blink from 'blink-element'

var elem = document.querySelector('.element-in-need-of-blink')

blink({
  element: elem, // Element to add blinking effect
  speed: 0.01 // Speed at which the opacity will change for fade in/out
})

```

## API

The `blink` function takes a single object as its argument with `element` and `speed` as its properties. 

See [usage](#usage) for an example of how to call the function.


## Contribute

Contributions are welcome. Please open up an issue or create PR if you would like to help out.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

Created with ♥ by [Tiaan](http://tiaanduplessis.co.za). Licensed under the MIT License.