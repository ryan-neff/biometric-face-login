$(document).ready(function(){
  
 var kairos = new Kairos("7971342c", "13374dfbeebc234f9f298a56f9d20de8");
 var video = document.querySelector("#videoElement");
 var canvas = document.getElementById("canvas");
 	 context = canvas.getContext("2d");

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
 
if (navigator.getUserMedia) {       
    navigator.getUserMedia({video: true, width: 480, height: 240}, handleVideo, videoError);
}
 
function handleVideo(stream) {
    video.src = window.URL.createObjectURL(stream);
}
 
function videoError(e) {
    // do something
}


$("#face_button").click(function(){
    context.drawImage(video, 0, 0, 640, 480);
});

});



