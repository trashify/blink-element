<h1 align="center">✨ blink-element</h1>
<br>
<div align="center">
	<img width="100%" src="https://raw.githubusercontent.com/tiaanduplessis/blink-element/master/media/blink.gif" alt="Blink - For those times you wanna make a element blink using JS" />
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/blink-element">
    <img src="https://img.shields.io/npm/v/blink-element.svg?style=flat-square" alt="Package version" />
  </a>
  <a href="https://npmjs.org/package/blink-element">
  <img src="https://img.shields.io/npm/dm/blink-element.svg?style=flat-square" alt="Downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/blink-element">
    <img src="https://img.shields.io/travis/tiaanduplessis/blink-element.svg?style=flat-square" alt="Travis Build" />
  </a>
  <a href="https://github.com/RichardLitt/standard-readme)">
    <img src="https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square" alt="Standard Readme" />
  </a>
  <a href="https://badge.fury.io/gh/tiaanduplessis%2Fblink-element">
    <img src="https://badge.fury.io/gh/tiaanduplessis%2Fblink-element.svg?style=flat-square" alt="GitHub version" />
  </a>
  <a href="https://dependencyci.com/github/tiaanduplessis/blink-element">
    <img src="https://dependencyci.com/github/tiaanduplessis/blink-element/badge?style=flat-square" alt="Dependency CI" />
  </a>
  <a href="https://github.com/tiaanduplessis/blink-element/blob/master/other/LICENSE">
    <img src="https://img.shields.io/npm/l/blink-element.svg?style=flat-square" alt="License" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs" />
  </a>
  <a href="https://www.paypal.me/tiaanduplessis/1">
    <img src="https://img.shields.io/badge/$-support-green.svg?style=flat-square" alt="Donate" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/blink-element/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/blink-element.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/blink-element/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/blink-element.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20blink-element!%20https://github.com/tiaanduplessis/blink-element%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/blink-element.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="tiaanduplessis.co.za">Tiaan</a> and <a href="https://github.com/tiaanduplessis/blink-element/graphs/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
	<li><a href="#about">about</a></li>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#api">API</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## About

A small module to make a DOM element blink using JS.

## Install

Install with cdn

```html
<link rel="stylesheet" href="https://unpkg.com/blink-element/lib/blink.js">
<!-- Or -->
<link rel="stylesheet" href="https://cdn.rawgit.com/tiaanduplessis/blink-element/master/lib/blink.js">
```

Install with npm

```sh
$ npm install --save blink-element
```

Install with yarn

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

Note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

Licensed under the MIT License.

