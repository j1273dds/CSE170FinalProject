$(document).ready(function() {
   init();
})

function init() {
   if (window.location.href.indexOf('/lost') >= 0) {
      document.getElementById("lost").style.backgroundColor = "#0b7dda";
   } else {
      if (window.location.href.indexOf('/found') >= 0) {
         document.getElementById("found").style.backgroundColor = "#0b7dda";
      }
   } 
   $(".post .individual button").click(moreInfo);
}


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// user clicks on Found
function switchLtoF() {
   window.location.href = '/found';  
   document.getElementById("found").style.backgroundColor = "#0b7dda";
   document.getElementById("lost").style.backgroundColor = "#2196F3";
}

// user clicks on Lost
function switchFtoL() {
   window.location.href = '/lost';
   document.getElementById("lost").style.backgroundColor = "#0b7dda";
   document.getElementById("found").style.backgroundColor = "#2196F3";
}


//var lostposts = require('../../data.json');

var clicked = 0;

// user clicks on more info
function moreInfo(e) {
   e.preventDefault();
   var color = document.getElementById("lost").style.backgroundColor;
   var id = $(this).closest('.individual').attr('id');

   if (clicked == 0) {
      $("#" + id + " #moreText").html("<p>placeholder info</p>");
      $("#" + id + " button").html("<i class='fa fa-angle-up'></i>");
      clicked = 1;
   } else {
      $("#" + id + " #moreText").html("<p></p>");
      $("#" + id + " button").html("<i class='fa fa-angle-down'></i>");
      clicked = 0;
   }
   /*if (color == "rgb(11, 125, 218)") {

   } else {
   
   }*/
}

