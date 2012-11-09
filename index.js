var nextTick = (typeof process !== 'undefined' && process !== null &&
    typeof process.nextTick === 'function') ? process.nextTick :
    function (cb) { setTimeout(cb, 0); };

module.exports = function throttled(fn){
  var queued = false
    , cbs = []
  return function(){
    var args = Array.prototype.slice.call(arguments, 0)
    if (typeof args[args.length - 1] === 'function') cbs.push(args.pop())
    if (queued) return;
    queued = true;
    nextTick(function(){
      queued = false;
      args.push(function(){
        for (var i = 0; i < cbs.length; ++i) {
          cbs[i].apply(this, arguments);
        }
      });
      fn.apply(this, args);
    });
  };
};
