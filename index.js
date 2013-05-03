var _ = require('underscore')
  , _s = require('underscore.string')
  , exec = require('child_process').exec

module.exports = function (options, callback) {
  options = _.defaults(options, {
    index: 0, offset: 0
  });

  if (!options.file) {
    return callback('must specify a file');
  }

  if (options.index && !options.offset) {
    return callback('must specify an offset');
  }

  var cmd = _s.sprintf('echoprint-codegen "%s" %d %d', options.file, options.index, options.offset);

  exec(cmd, function (err, stdout) {
    if (err) return callback(err);

    try {
      var data = JSON.parse(stdout)[0];
      callback(data.error, data);
    } catch (e) {
      callback(e);
    }
  });
};