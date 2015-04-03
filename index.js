// git-tag

var fs = require('fs')
var exec = require('child_process').exec
var semver = require('semver')

var callback = function(cb, err, res) {
  if (typeof cb !== 'function') return
  cb.length === 2 ? cb(err, res) : cb(res)
}

module.exports = function(options) {
  options = options || {}

  var get = function(cb) {
    var cmd = 'git tag -l'
    if (!options.localOnly) {
      cmd = 'git pull origin --tags; ' + cmd
    }
    exec(cmd, function(err, res){
      if (err) return callback(cb, err, [])
      res = res.replace(/^\s+|\s+$/g,'').split(/\n/)
      try {
        res = res.sort(semver.compare)
      } catch(e) {}
      callback(cb, err, res)
    })
  }

  var create = function(name, msg, cb) {
    msg = typeof msg === 'string' ? msg : ''
    var cmd = 'git tag -a ' + name + ' -m "' + msg + '"'
    if (!options.localOnly) {
      cmd += '; git push origin --tags'
    }
    exec(cmd, function(err){
      callback(cb, err, name)
    })
  }

  var remove = function(name, cb) {
    var cmd = 'git tag -d ' + name
    if (!options.localOnly) {
      cmd += '; git push origin :refs/tags/' + name
    }
    exec(cmd, function(err){
      callback(cb, err, name)
    })
  }

  var Tag = {
    create: create,
    remove: remove,
    all: get,
    latest: function(cb) {
      get(function(err, res){
        if (err) return callback(cb, err, res)
        callback(cb, err, res.pop())
      })
    }
  }
  return Tag
}