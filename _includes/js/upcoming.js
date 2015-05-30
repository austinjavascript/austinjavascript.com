(function() {
  var script = document.currentScript;
  var container = script.parentElement.parentElement;
  var date = container.querySelector('x-date').when();

  if (date < new Date()) {
    container.className = 'hidden';
    document.getElementById('no-upcoming-meetups').className = '';
  }
})();
