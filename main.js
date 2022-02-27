music1 = "";
music2 = "";
lfwx = "";
lfwy = "";
rgwx = "";
rgwy = "";


function preload(){
music1 = loadSound("music.mp3");
music2 = loadSound("music2.mp3");
}

function setup(){
canvas = createCanvas(400,400);
canvas.position(515, 210 );
video = createCapture(VIDEO);
video.hide();
posenet = ml5.poseNet(video, modelLoaded)
posenet.on('pose', gotPoses)
}

function modelLoaded(){
console.log("The posenet is initialized!");
}

function draw(){
image(video, 0, 0, 400, 400);
}
function gotPoses(results){

    if(results.length > 0){
    console.log(results);
    lfwx = results[0].pose.leftWristX;
    lfwy = results[0].pose.leftWristY;
    console.log("Left Wrist X is " + lfwx + " and Left Wrist Y is " + lfwy);
    rgwx = results[0].pose.rightWristX;
    rgwy = results[0].pose.rightWristX;
    console.log("Right Wrist X is " + rgwx + " and Right Wrist Y is " + rgwy);

    }
}
