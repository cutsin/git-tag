var assert = require('assert')
var gitTag = require('../')({localOnly:true,dir:'../.git'})
var async = require('async')

console.log('test start...')
var tagname = '2015.2015.2015'
var invalidTag = '201520152015'

async.series([
	// create a invalid tag with 2 args
	function(next) {
		gitTag.create(invalidTag, 'Just a test',function(err, res){
			assert.ok(res === invalidTag)
			next()
		})
	},
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
	// get all tags with 2 args
	function(next) {
		gitTag.all(function(err, res){
			assert.ok(!err)
			assert.ok(toString.apply(res) === '[object Array]')
			next()
		})
	},
	// get latest tag with 2 args
	function(next) {
		gitTag.latest(function(err, res){
			assert.ok(!err)
			assert.ok(res === invalidTag)
			next()
		})
	},
	// remove invalid tag with 2 args
	function(next) {
		gitTag.remove(invalidTag, function(err, res){
			assert.ok(!err)
			assert.ok(res === invalidTag)
			next()
		})
	},
	// get latest tag
	function(next) {
		gitTag.latest(function(res){
			assert.ok(res === tagname)
			next()
		})
	},
	// remove a tag
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
