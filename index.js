var exec = require('child_process').exec
  , util = require('util');

module.exports = function (options, callback) {
  if (typeof options === 'string') {
    options = {file: options};
  }

  if (!options.file) {
    return callback('must specify a file');
  }

  if (!options.index) {
    options.index = 0;
  }

  if (!options.offset) {
    options.offset = 0;
  }

  if (options.index && !options.offset) {
    return callback('must specify an offset');
  }

  var cmd = util.format('echoprint-codegen "%s" %d %d', options.file, options.index, options.offset);

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