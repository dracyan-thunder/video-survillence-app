status="";
function preload(){
    video=createVideo('video.mp4');
}

function setup(){
    canvas=createCanvas(500,400);
    canvas.position(400,275);
    video.hide()
}

function draw(){
    image(video,0,0,0,0);
}

function start(){
    document.getElementById("status").innerHTML='Status : Detecting Objects';
    objectdetector=ml5.objectDetector('cocossd',modeloaded);
}

function modeloaded(){
    console.log("oooooo yaaaahhhhhhh");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(10);
}