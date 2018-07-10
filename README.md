<h1 align="center">sewing</h1>

<p align="center">
  <a href="https://circleci.com/gh/Army-U/sewing"><img src="https://img.shields.io/circleci/project/github/Army-U/sewing.svg?style=flat-square" alt="Build Status" /></a>
  <a href="https://david-dm.org/Army-U/sewing"><img src="https://img.shields.io/david/Army-u/sewing.svg?style=flat-square" alt="Dependency Status" /></a>
  <a href="https://www.npmjs.com/package/sewing"><img src="https://img.shields.io/npm/v/sewing.svg?style=flat-square" alt="Version" /></a>
</p>

### Introduction

Javascript utility library, applicable to business scenes. Without dependencies.

### Download

* [UMD Version](https://unpkg.com/sewing/libs/index.min.js)
* [IIFE Version](https://unpkg.com/sewing/libs/index.iife.js)

### Quick Start

Using npm:
```bash
$ npm i sewing
```

In a browser:
```html
<script src="https://unpkg.com/sewing"></script>
```

In Node.js:
```js
const sewing = require('sewing')
const isEmpty = require('sewing/isEmpty')
```

In TypeScript:
```js
import sewing from 'sewing'
import isEmpty from 'sewing/dist/src/isEmpty'
```

### Examples

```javascript
import { isEmpty } from 'sewing'

isEmpty(10) // => false
isEmpty('') // => true
```

### Development

```bash
git clone git@github.com:Army-U/sewing.git
cd sewing && npm i && npm run dev
```

### License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2017-present, Army-U
