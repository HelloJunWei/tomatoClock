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
      swal.fire({
        type: 'success',
        title: msg,
        showConfirmButton: true,
        timer: 2500
      })
    },
    error: function (msg) {
      swal.fire({
        type: 'error',
        title: msg,
        confirmButtonColor: '#F93E3F',
        confirmButtonText: '取消'
      })
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
