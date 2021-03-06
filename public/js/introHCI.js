$(document).ready(function() {
   init();
})

function init() {
    var search = document.getElementById('myInput');
    search.style.display = "inline";

   // after signing in, change button colors and URL
   if (window.location.href.indexOf('/lost') >= 0) {
      // document.getElementById("lost").style.backgroundColor = "#0b7dda";
      document.getElementById("lost").style.borderBottom = "3px solid white";
      
      let stateObj = {id:"1"};
      window.history.replaceState(stateObj, "Lost Items", "/lost");
   } else {
      if (window.location.href.indexOf('/found') >= 0) {
         // document.getElementById("found").style.backgroundColor = "#0b7dda";
         let stateObj = {id:"2"};
         window.history.replaceState(stateObj, "Found Items", "/found");
      }
   } 

   // after adding post, change button color and URL
   if (window.location.href.indexOf('lost_found=lost') >= 0) {
      // document.getElementById("lost").style.backgroundColor = "#0b7dda";
      let stateObj = {id:"1"};
      window.history.replaceState(stateObj, "Lost Items", "/lost");
   } else {
      if (window.location.href.indexOf('lost_found=found') >= 0) {
         // document.getElementById("found").style.backgroundColor = "#0b7dda";
         let stateObj = {id:"2"};
         window.history.replaceState(stateObj, "Found Items", "/found");
      }
   } 
   if (window.location.href.indexOf('/found') >= 0) {
      // document.getElementById("found").style.backgroundColor = "#0b7dda";
      document.getElementById("found").style.borderBottom = "3px solid white";

      
   }
   if (window.location.href.indexOf('/sortFound') >= 0) {
      // document.getElementById("found").style.backgroundColor = "#0b7dda";
      document.getElementById("found").style.borderBottom = "3px solid white";
   }
   if (window.location.href.indexOf('/sortLost') >= 0) {
      // document.getElementById("lost").style.backgroundColor = "#0b7dda";
      document.getElementById("lost").style.borderBottom = "3px solid white";    
   }
   if (window.location.href.indexOf('/sortNewLost') >= 0) {
      // document.getElementById("lost").style.backgroundColor = "#0b7dda";
      document.getElementById("lost").style.borderBottom = "3px solid white";
   }
   if (window.location.href.indexOf('/sortNewFound') >= 0) {
      // document.getElementById("found").style.backgroundColor = "#0b7dda";
      document.getElementById("found").style.borderBottom = "3px solid white";      
   }            
   $(".post .individual button").click(moreInfo);
}


function showDropDown(){
  console.log(1);
  document.getElementByClass("dropdown-content").toggle("show");
  console.log(this);
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
 function myFunctionSearch(){
    var cls = document.getElementsByClassName("individual");
    len = cls.length;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();

  // start the index at 0;
      n = 0;
  for (; n < len; n++) {
    a = cls[n].getElementsByTagName("h1")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            cls[n].style.display = "";
        } else {
            cls[n].style.display = "none";
        }
  }
 }