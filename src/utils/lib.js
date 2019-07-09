(function (global, factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    // For CommonJS and CommonJS-like environments where a proper window is present,
    // execute the factory
    module.exports = global.document ? factory(global, true) : function (w) {
      if (!w.document) {
        throw new Error('myLib requires a window with a document')
      }
      return factory(w)
    }
  } else {
    // for CDN type use
    // add myLib to window
    factory(global)
  }
}(window, function (window, noGlobal) {
  var myLib = function () {
    return new myLib.Init()
  }
  // myLib.__proto__ === myLib.Init.prototype === myLib.prototype
  myLib.prototype = {
    _alert: function (msg) {
      swal({ icon: 'success', text: msg })
    },
    error: function (msg) {
      swal({ icon: 'error', text: msg })
    },
  }
  myLib.Init = function () {}
  myLib.Init.prototype = myLib.prototype
  if (typeof noGlobal === 'undefined') {
    // for CDN type use
    // add myLib to window
    window.myLib = myLib
  }
  return myLib
}))
