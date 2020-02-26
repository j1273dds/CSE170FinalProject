$(document).ready(function() {
   init();
})

function init() {
   // after signing in, change button colors and URL
   if (window.location.href.indexOf('/lost') >= 0) {
      document.getElementById("lost").style.backgroundColor = "#0b7dda";
      let stateObj = {id:"1"};
      window.history.replaceState(stateObj, "Lost Items", "/lost");
   } else {
      if (window.location.href.indexOf('/found') >= 0) {
         document.getElementById("found").style.backgroundColor = "#0b7dda";
         let stateObj = {id:"2"};
         window.history.replaceState(stateObj, "Found Items", "/found");
      }
   } 

   // after adding post, change button color and URL
   if (window.location.href.indexOf('lost_found=lost') >= 0) {
      document.getElementById("lost").style.backgroundColor = "#0b7dda";
      let stateObj = {id:"1"};
      window.history.replaceState(stateObj, "Lost Items", "/lost");
   } else {
      if (window.location.href.indexOf('lost_found=found') >= 0) {
         document.getElementById("found").style.backgroundColor = "#0b7dda";
         let stateObj = {id:"2"};
         window.history.replaceState(stateObj, "Found Items", "/found");
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


var clicked = 0;

// user clicks on more info
function moreInfo(e) {
   e.preventDefault();
   var color = document.getElementById("lost").style.backgroundColor;
   var id = $(this).closest('.individual').attr('id');

   // display or hide information in span
   if (clicked == 0) {
      $("#" + id + " span").css('display', 'block');
      $("#" + id + " button").html("<i class='fa fa-angle-up'></i>");
      clicked = 1;
   } else {
      $("#" + id + " span").css('display', 'none');
      $("#" + id + " button").html("<i class='fa fa-angle-down'></i>");
      clicked = 0;
   }

}

