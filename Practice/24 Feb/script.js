// JQuery Selectors and use of noconflict()

$(document).ready(function () {
  $("p").click(function () {
    $(this).hide();
  });
});

$(document).ready(function () {
  $("button").click(function () {
    $("#test").hide();
  });
});

$("#p1").mouseenter(function () {
  alert("You entered p1!");
});

$("#p1").mousedown(function () {
  alert("Mouse down over p1!");
});

$("input").focus(function () {
  $(this).css("background-color", "#cccccc");
});

$("input").blur(function () {
  $(this).css("background-color", "#ffffff");
});

$("button").click(function () {
  $("p").hide(1000);
  alert("The paragraph is now hidden");
});

$.noConflict();
jQuery(document).ready(function () {
  jQuery("button").click(function () {
    jQuery("p").text("jQuery is still working!");
  });
});

$.noConflict();
jQuery(document).ready(function ($) {
  $("button").click(function () {
    $("p").text("jQuery is still working!");
  });
});
