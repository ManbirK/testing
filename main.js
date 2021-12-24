camera = document.getElementById("camera");

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();


function start_r() {
    document.getElementById("voice_text").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run(event) {
    console.log(event);
    var t_speech = event.results[0][0].transcript;
    console.log(t_speech);
    document.getElementById("voice_text").innerHTML = t_speech;
    if (t_speech == 'take my selfie') {
        console.log('take my selfie');
        speak();
    }

}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds.";
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach(camera);
    take_snapshot();
}
Webcam.set({
    height: 250,
    width: 300,
    image_format: "png",
    png_quality: 90
});

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("picture").innerHTML = "<img id='pic_t' src='"+ data_uri +"'>";
        
    });

}

