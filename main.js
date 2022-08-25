var SpeechRecognition = window.webkitSpeechRecognition

var recognition = new SpeechRecognition();

function start()
{
document.getElementById("textbox").innerHTML="";
recognition.start();
}

recognition.onresult = function(event) {
console.log(event);
var content = event.results[0][0].transcript;
console.log();
    speak();
document.getElementById("textbox").innerHTML = content;
}

function speak() {
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").value;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    width:360,
    height:250,
    Image_format : 'png',
    png_quality:100
});
camera = document.getElementById("camera");

function start(){
    Webcam.attach(camera);
}

 
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:300,
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });

    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
  
}


