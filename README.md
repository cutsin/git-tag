# git-tag

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]

## Install

```
npm install git-tag
```

## Usage

```javascript
var gitag = require('git-tag')()
console.log(gitag)
// >> json object {}
```
With cache:
```javascript
var json = require('git-tag')('./foo.yml', true)
```
Disable cache if `NODE_ENV=production`:
```javascript
var json = require('git-tag')('./foo.yaml', false)
```


## Test

```
npm test
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/git-tag.svg?style=flat
[npm-url]: https://npmjs.org/package/git-tag
[travis-image]: https://travis-ci.org/cutsin/git-tag.svg
[travis-url]: https://travis-ci.org/cutsin/git-tag
[downloads-image]: https://img.shields.io/npm/dm/git-tag.svg?style=flat
[downloads-url]: https://npmjs.org/package/git-tag
