nosex=0;
nosey=0;
difference=0;

function setup(){
    video = createCapture(VIDEO);
video.size = (500, 500);
video.position(50,150);
canvas = createCanvas(500, 500);
canvas.position(700,150);
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);


}

function draw(){
    background('#9999FF');
    fill('#5B72D7');
   textSize(difference);
   text('Vedant', 50,200);
   document.getElementById("squareside").innerHTML= "What the text font will be = " + difference + "px";
}

function modelLoaded(){
console.log('poseNet is initialized');

}

function gotPoses(results){
    if(results.length > 0){
console.log(results);
leftwristx= results[0].pose.leftWrist.x;
rightwristx= results[0].pose.rightWrist.x;    
difference=floor( leftwristx - rightwristx );
console.log("leftwristx= " + leftwristx + "rightwristx= " + rightwristx + "difference =" + difference );
    }
}