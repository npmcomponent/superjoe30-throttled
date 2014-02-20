*This repository is a mirror of the [component](http://component.io) module [superjoe30/throttled](http://github.com/superjoe30/throttled). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/superjoe30-throttled`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
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
