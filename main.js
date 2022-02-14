song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload(){
    song1=loadSound("butter.mp3");
    song2=loadSound("gone gone gone.mp3");
}
function setup(){
    canvas=createCanvas(550, 550);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    PoseNet=ml5.poseNet(video, modelloaded);
    PoseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 550, 550);
}
function modelloaded(){
      console.log("Your model is successfully loaded");
}   

function gotPoses(results){
    if(results.length>0){
      leftWristX=results[0].pose.leftWrist.x;
      leftWristY=results[0].pose.leftWrist.y;
      console.log("Left Wrist X = "+leftWristX);
      console.log("Left Wrist Y = "+leftWristY);
      rightWristX=results[0].pose.rightWrist.x;
      rightWristY=results[0].pose.rightWrist.y;
      console.log("Right Wrist X = "+rightWristX);
      console.log("Right Wrist Y = "+rightWristY);
    }
}
