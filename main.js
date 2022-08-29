var noseX =0;
var noseY =0;
var capture; 
function preload(){
    dari = loadImage('m.png');
    thot = loadImage('1.png');
}
function setup(){
    canv = createCanvas(400,300);
    canv.center();
  capture = createCapture(VIDEO);
  capture.size(400, 300);
  
  capture.hide();
  poseNet = ml5.poseNet(capture,modelLoaded);
  poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is initialize");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x;
        noseY  = results[0].pose.nose.y;
    }
}
function draw(){
     background(255);
     
  image(capture, 0, 0, 400, 300);
  push();
imageMode(CENTER);    
image(dari,noseX,noseY+25,50,50);
image(thot,noseX,noseY+45,50,50);
pop();
 
}
function saveit(){
    save("image.png")
}
