"use strict";

var deadline = new Date("Jan 1, 2024 00:00:00").getTime();
var message = document.querySelector("h1");
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = deadline - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
  var seconds = Math.floor(distance % (1000 * 60) / 1000);
  document.getElementById("countdown").innerHTML = "".concat(days, "j ").concat(hours, "h ").concat(minutes, "m ").concat(seconds, "s");

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "HAPPY NEW YEAR";
    message.style.display = "none";
  }
}, 1000);