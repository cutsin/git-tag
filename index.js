// git-tag

var fs = require('fs')
var exec = require('child_process').exec


module.exports = function(options) {
  options = options || {}

  var get = function(cb) {
    var cmd = 'git tag -l'
    if (!options.localOnly) {
      cmd = 'git pull origin --tags; ' + cmd
    }
    exec(cmd, function(err, res){
      if (err) console.warn('WARN: ' + err)
      if (err || !res.length) return cb([])
      res = res.replace(/^\s+|\s+$/g,'').split(/\n/)
      cb(err ? [] : res)
    })
  }

  var create = function(name, msg, cb) {
    msg = typeof msg === 'string' ? msg : ''
    var cmd = 'git tag -a ' + name + ' -m "' + msg + '"'
    if (!options.localOnly) {
      cmd += '; git push origin --tags'
    }
    exec(cmd, function(err){
      if (err) console.warn('WARN: ' + err)
      cb(name)
    })
  }

  var remove = function(name, cb) {
    var cmd = 'git tag -d ' + name
    if (!options.localOnly) {
      cmd += '; git push origin :refs/tags/' + name
    }
    exec(cmd, function(err){
      if (err) console.warn('WARN: ' + err)
      cb(name)
    })
  }

  var Tag = {
    create: create,
    remove: remove,
    all: get,
    latest: function(cb) {
      get(function(res){
        cb(res.pop())
      })
    }
  }
  return Tag
}