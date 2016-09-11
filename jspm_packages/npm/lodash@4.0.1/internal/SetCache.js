/* */ 
var MapCache = require('./MapCache'),
    cachePush = require('./cachePush');
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;
  this.__data__ = new MapCache;
  while (++index < length) {
    this.push(values[index]);
  }
}
SetCache.prototype.push = cachePush;
module.exports = SetCache;
