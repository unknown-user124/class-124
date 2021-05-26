function setup() {
    video=createCapture(VIDEO);
    video.size(550,550);
    canvas=createCanvas(550,550);
    canvas.position(570,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw() {
    background('#3446eb');
}
function modelLoaded() {
console.log('PoseNEt is initialized');
}
function gotPoses(results) {
    if (results.length>0)
     {
        console.log(results);
    }
}