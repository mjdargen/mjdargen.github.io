// Clock Functions (for taskbar clock)
function updateClock() {
  var d = new Date();
  var x = document.getElementById("clock");
  var h = d.getHours();
  var m = padZero(d.getMinutes());
  var s = padZero(d.getSeconds());
  x.innerHTML = h + ":" + m + ":" + s;
}

// pads zero in front of number to maintain spacing
function padZero(i) {
  if (i < 10) i = "0" + i;
  return i;
}

// converts from 24h system to 12h system
function twelveHour(h) {
  if (h > 12) h = h - 12;
  else if (h == 0) h = 12;
  return h;
}

// calculates am or pm
function ampm(h) {
  if (h < 12) var a = "AM";
  else var a = "PM";
  return a;
}
