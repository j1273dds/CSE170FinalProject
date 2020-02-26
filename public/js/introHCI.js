$(document).ready(function() {
   init();
})

function init() {
   if (window.location.href.indexOf('/lost') >= 0) {
      document.getElementById("lost").style.backgroundColor = "#0b7dda";
      document.getElementById("lost").style.borderTop = "5px solid #71e60f";


   } 
   if (window.location.href.indexOf('/found') >= 0) {
      document.getElementById("found").style.backgroundColor = "#0b7dda";
      document.getElementById("found").style.borderTop = "5px solid #71e60f";
      
   }
   if (window.location.href.indexOf('/sortFound') >= 0) {
      document.getElementById("found").style.backgroundColor = "#0b7dda";
      document.getElementById("found").style.borderTop = "5px solid #71e60f";
   }
   if (window.location.href.indexOf('/sortLost') >= 0) {
      document.getElementById("lost").style.backgroundColor = "#0b7dda";
      document.getElementById("lost").style.borderTop = "5px solid #71e60f";    
   }
   if (window.location.href.indexOf('/sortNewLost') >= 0) {
      document.getElementById("lost").style.backgroundColor = "#0b7dda";
      document.getElementById("lost").style.borderTop = "5px solid #71e60f";
   }
   if (window.location.href.indexOf('/sortNewFound') >= 0) {
      document.getElementById("found").style.backgroundColor = "#0b7dda";
      document.getElementById("found").style.borderTop = "5px solid #71e60f";      
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
var paragraph;
var idBefore;

// user clicks on more info
function moreInfo(e) {
   e.preventDefault();
   var color = document.getElementById("lost").style.backgroundColor;
   id = $(this).closest('.individual').attr('id');


   if (clicked == 0) { //display text 
      $("#" + id + " #moreText").append(paragraph);
      $("#" + id + " button").html("<i class='fa fa-angle-up'></i>");
      clicked = 0;
   } else { //remove text 
      $("#" + id + " #moreText").html("<p></p>");
      $("#" + id + " button").html("<i class='fa fa-angle-down'></i>");
      clicked = 1;
   }
}
 function sortOld(){
  if (window.location.href.indexOf('/lost') >= 0) {
          window.location.href = '/sortLost'; 
    } 
  if (window.location.href.indexOf('/found') >= 0) {
            window.location.href = '/sortFound'; 
    }
  if (window.location.href.indexOf('/sortNewLost') >= 0) {
            window.location.href = '/sortLost'; 
    }
  if (window.location.href.indexOf('/sortNewFound') >= 0) {
            window.location.href = '/sortFound'; 
    }           
 }
  function sortNew(){
  if (window.location.href.indexOf('/lost') >= 0) {
          window.location.href = '/sortNewLost'; 
    } 
  if (window.location.href.indexOf('/found') >= 0) {
          window.location.href = '/sortNewFound'; 
    } 
  if (window.location.href.indexOf('/sortFound') >= 0) {
          window.location.href = '/sortNewFound'; 
    }
  if (window.location.href.indexOf('/sortLost') >= 0) {
          window.location.href = '/sortNewLost'; 
    }          
 }
