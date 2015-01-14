// git-tag

var fs = require('fs')
var exec = require('child_process').exec

var getTags = function(cb) {
  exec('git tag -l', function(err, res){
    if (err) cb([])
    res = res.replace(/^\s+|\s+$/g,'').split(/\n/)
    cb(err ? [] : res)
  })
}

var create = function(tagname, cb) {
  exec('git tag '+ tagname, function(err){
    cb(null, tagname + ' is created.')
  })
}

module.exports = function() {  
  var tags = []
  var Tag = {
    create: create,
    all: function(cb) {
      if (tags.length) return tags
      getTags(function(res){
        tags = res
        cb(tags)
      })
    },
    latest: function(cb) {
      var len = tags.length
      if (len) return tags[len-1]
      getTags(function(res){
        tags = res
        cb(tags[tags.length-1])
      })
    }
  }
  return Tag
}