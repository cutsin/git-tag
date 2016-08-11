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
var gitTag = require('git-tag')({localOnly:true,dir:'/path/to/git/.git'})
```

### Create a tag

```javascript
gitTag.create('0.0.2015', 'just a message', function(res){
	console.log(res) // >> 0.0.2015
})
gitTag.create('0.0.2015', 'just a message', function(err, res){
	console.log(err, res) // >> null, 0.0.2015
})
```

### Remove a tag

```javascript
gitTag.remove('0.0.2015', function(res){
	console.log(res) // >> 0.0.2015
})
gitTag.remove('0.0.2015', function(err, res){
	console.log(err, res) // >> null, 0.0.2015
})
```

### Get a latest tag

```javascript
gitTag.latest(function(res){
	console.log(res) // >> 0.0.2015
})
gitTag.latest(function(err, res){
	console.log(err, res) // >> null, 0.0.2015
})
```

### Get all tags

```javascript
gitTag.all(function(res){
	console.log(res) // >> ['0.0.2015']
})
gitTag.all(function(err, res){
	console.log(err, res) // >> null, ['0.0.2015']
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
