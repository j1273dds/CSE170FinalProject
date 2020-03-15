function lost() {
	$("#lost_found").val("lost");
	document.getElementById("LostBtn").style.backgroundColor = "#2196F3";
	document.getElementById("FoundBtn").style.backgroundColor = "";

}

function found() {
	$("#lost_found").val("found");
	document.getElementById("FoundBtn").style.backgroundColor = "#2196F3";
	document.getElementById("LostBtn").style.backgroundColor = "";
}

function date() {

}

var outImage ="imagenFondo";
function preview_2(obj)
{
  if (FileReader)
  {
    var reader = new FileReader();
    reader.readAsDataURL(obj.files[0]);
    reader.onload = function (e) {
    var image=new Image();
    image.src=e.target.result;
		
    // image.onload = function () {
    //   document.getElementById(outImage).src=image.src;
    // };
    }
  }
  else
  {
        // Not supported
  }
}