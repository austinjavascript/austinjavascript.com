(function() {
  var script = document.currentScript;
  var previousOnload = window.onload || function(){};
  window.onload = function() {
    previousOnload();
    var container = script.parentElement.parentElement;
    var date = container.querySelector('x-date').when();

    if (date < new Date()) {
      container.className = 'hidden';
      document.getElementById('no-upcoming-meetups').className = '';
    }
  };
})();
