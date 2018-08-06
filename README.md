<h1 align="center">sewing</h1>

<p align="center">
  <a href="https://circleci.com/gh/Army-U/sewing"><img src="https://flat.badgen.net/circleci/github/Army-U/sewing/master" alt="Build Status" /></a>
  <a href="https://david-dm.org/Army-U/sewing"><img src="https://flat.badgen.net/david/dep/Army-U/sewing" alt="Dependency Status" /></a>
  <a href="https://www.npmjs.com/package/sewing"><img src="https://flat.badgen.net/npm/v/sewing" alt="Version" /></a>
  <a href="https://www.npmjs.com/package/sewing"><img src="https://flat.badgen.net/npm/dt/sewing" alt="Download" /></a>
</p>

### Introduction

Javascript utility library, applicable to business scenes. Without dependencies.

### Quick Start

Using npm:
```bash
$ npm i sewing
```

In TypeScript/ESM:
```js
import sewing from 'sewing'
import isEmpty from 'sewing/dist/isEmpty'
```

In Node.js:
```js
// You can't require whole library, it contains browser env code.
const isEmpty = require('sewing/libs/isEmpty')
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
