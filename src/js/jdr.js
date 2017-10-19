(function (w,d) {
  w.jdr = w.jdr || {};
  jdr.isReady = false;
  jdr.onloads = jdr.onloads || [];
  d.addEventListener('DOMContentLoaded', function() {
     document.removeEventListener( "DOMContentLoaded", arguments.callee, false );
     jdr.isReady = true;
     while (jdr.onloads.length) {
       jdr.onloads.shift().call();
     }
  },false);
}(window,document));
