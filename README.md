Echoprint Codegen
=================

[Echoprint Codegen](https://github.com/echonest/echoprint-codegen) wrapper for node.
It requires the echoprint-codegen binary installed in order to work.

Usage
-----

```javascript
var codegen = require('echoprint-codegen');

codegen('/path/to/file', function (err, data) {
  if (err) return console.error(err);
  console.log(data); // {"metadata":{...}, "code_count": 4098, "code": "eJzFn..."}
});
```

Options
-------

You can specify several options:
* file — The path to the file. (required)
* index — Where to start analyzing the sound (in seconds.) (defaults to 0)
* offset — How many seconds of the sound should be analyzed. Required if index is set. (defaults to 0)

```javascript
var opts = {
  file: '/path/to/file',
  index: 10,
  offset: 30
}

codegen(opts, function (err, data) {
  if (err) return console.error(err);
  console.log(data);
});
```