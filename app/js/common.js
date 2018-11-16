$(function() {

});

//  jQuery с использованием <div>
$.get("img/sprite.svg", function(data) {
  var div = document.createElement("div");
  div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
  document.body.insertBefore(div, document.body.childNodes[0]);
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	rtl:true,
    items:1,
    loop:true,
    nav:true
  });
});

