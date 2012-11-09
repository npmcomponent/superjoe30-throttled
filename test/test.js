var throttled = require('../')
  , assert = require('assert');

describe("throttled functions", function() {
  it("calling twice in the same event loop runs it once", function(cb) {
    var count = 0;
    var tryThis = throttled(function(cb) {
      count += 1;
      cb(1, 2, 3, 4);
    });
    var cbCount = 0;
    tryThis(incrementCbCount);
    tryThis(incrementCbCount);
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
  });
  it("passing args other than callback", function(cb) {
    var count = 0;
    var tryThis = throttled(function(text, cb) {
      assert.strictEqual(text, "cheese");
      count += 1;
      cb(1, 2, 3, 4);
    });
    var cbCount = 0;
    tryThis("cheese", incrementCbCount);
    tryThis("cheese", incrementCbCount);
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
  });
});
