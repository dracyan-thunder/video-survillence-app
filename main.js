status="";
object="";
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
    if(status!=""){
        objectdetector.detect(video,gotresult);
        for(i=0; i<object.length;i++){
            document.getElementById("status").innerHTML='Status : Objects Detected';
            fill("#0eacf0");
            pecentage=floor(object[i].confidence*100);
            text(objcet[i].label+percentage,object[i].x,object[i].y);
            noFill();
            stroke("#0eacf0");
            rect(objcet[i].x,object[i].y,object[i].width,objcet[i].height);
        }
    }
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
}

function gotresult(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        object=result;
    }
}