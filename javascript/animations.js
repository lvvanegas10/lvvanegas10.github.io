var w = window;
var TxtRotate = function(el, toRotate, period) {
  w.toRotate = toRotate;
  w.el = el;
  w.loopNum = 0;
  w.period = parseInt(period, 10) || 2000;
  w.txt = '';
  w.tick();
  w.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = w.loopNum % w.toRotate.length;
  var fullTxt = w.toRotate[i];

  if (w.isDeleting) {
    w.txt = fullTxt.substring(0, w.txt.length - 1);
  } else {
    w.txt = fullTxt.substring(0, w.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+w.txt+'</span>';

  var that = w;
  var delta = 300 - Math.random() * 100;

  if (w.isDeleting) { delta /= 2; }

  if (!w.isDeleting && w.txt === fullTxt) {
    delta = w.period;
    this.isDeleting = true;
  } else if (w.isDeleting && w.txt === '') {
    w.isDeleting = false;
    w.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #fff }";
  document.body.appendChild(css);
};
