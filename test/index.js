var assert = require('assert')
var gitTag = require('../')({localOnly:true})
var async = require('async')

console.log('test start...')
var tagname = '2015.2015.2015'

async.series([
	// create a tag
	function(next) {
		gitTag.create(tagname, 'Just a test',function(res){
			assert.ok(res === tagname)
			next()
		})
	},
	// get all tags
	function(next) {
		gitTag.all(function(res){
			assert.ok(toString.apply(res) === '[object Array]')
			next()
		})
	},
	// get latest tags
	function(next) {
		gitTag.latest(function(res){
			assert.ok(res === tagname)
			next()
		})
	},
	// remove a tags
	function(next) {
		gitTag.remove(tagname, function(res){
			assert.ok(res === tagname)
			next()
		})
	}
], function(err){
	if (err) console.log('test failed.')
	console.log('test ok.')
})