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
var gitTag = require('git-tag')({localOnly:true})

// create a tag
gitTag.create('0.0.2015', 'just a message',function(res){
	console.log(res) // >> 0.0.2015
})

// remove a tag
gitTag.remove('0.0.2015', function(res){
	console.log(res) // >> 0.0.2015
})

// get a latest tag
gitTag.latest(function(res){
	console.log(res) // >> 0.0.2015
})

// get all tags
gitTag.all(function(res){
	console.log(res) // >> ['0.0.2015']
})
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
