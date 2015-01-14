var assert = require('assert')
var gitTag = require('../')()

gitTag.latest(function(res){
	console.log(arguments)
	assert.ok(typeof res === 'string')
	console.log('test ok')
})
