function setup(){
canvas=createCanvas(550,500);
canvas.position(800,100);
video=createCapture(VIDEO);
pn=ml5.poseNet(video, modelLoaded);
pn.on('pose', gotPoses)

}

nosex=0;
nosey=0;
ristx=0;
lestx=0;
difference=0;


function modelLoaded(){

console.log("Model is Loaded")

}

function gotPoses(results){
if(results.length>1){

console.log(results);
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
ristx=results[0].pose.rightWrist.x;
lestx=results[0].pose.leftWrist.x;
difference=floor(lestx-ristx)
console.log("The Distance Between My Wrist Is",difference)
console.log("My nose x position is ",nosex)
console.log("My nose y position is ",nosey)
console.log("My right wrist x position is ",ristx)
console.log("My left wrist x position is ",lestx)
}
}

function draw(){

n1=document.getElementById("name").value;    
background("black")
fill("white")
stroke("red")
text(n1,nosex,nosey)
textSize(difference)
document.getElementById("update").innerHTML="The text size is "+difference+" px"


}