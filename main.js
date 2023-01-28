function preload() {
}

function setup() {
    canvas = createCanvas(320, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : DETECTING OBJECTS";
}

function modelLoaded() {
    console.log("MODEL LOADED");
}

function draw() {
    image(video, 0, 0, 320, 300);
}