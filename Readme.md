# throttled

  Create functions which only run once per event loop.

  Available as an npm module or component module.

## Usage

```js
var throttled = require('throttled'),
  , assert = require('assert')
  , count = 0
  , cbCount = 0

var tryThis = throttled(function(foo, cb) {
  assert.strictEqual(foo, "foo");
  count += 1;
  cb(1, 2, 3, 4);
});
tryThis("foo", incrementCbCount);
tryThis("foo", incrementCbCount);
setTimeout(function() {
  assert.strictEqual(count, 1);
  assert.strictEqual(cbCount, 2);
  cb();
}, 10);
function incrementCbCount(one, two, three, four) {
  cbCount += 1;
  assert.strictEqual(one, 1);
  assert.strictEqual(two, 2);
  assert.strictEqual(three, 3);
  assert.strictEqual(four, 4);
}
```

## License

  MIT
