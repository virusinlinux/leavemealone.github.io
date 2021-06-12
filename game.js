var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";

function setup(){
  createCanvas(600,600);
  textAlign(CENTER);
  textSize(20);
}
function draw(){
  background(0);
  if(gameState == "L1"){
    levelOne();
  }
  if(gameState == "L2"){
    levelTwo();
  }
  if(gameState == "L3"){
    levelThree();
  }
  textSize(40);
  text("SCORE " + score, width /2, 40);
}

function levelOne(){
  fill(255);
  text("Level 1", width/2,height-20);
  var disToBall = dist(ballx, bally, mouseX, mouseY);
  if(disToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score +1;
  }
  if(score > 5){
    gameState = "L2";
    
  }
  fill(255,255,0);
  ellipse(ballx, bally,ballSize, ballSize);
}

function levelTwo(){
  fill(255);
  text("Level 1", width/2,height-20);
  var disToBall = dist(ballx, bally, mouseX, mouseY);
  if(disToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score +3;
  }
  if(score > 10){
    gameState = "L2";
    
  }
  fill(255,255,0);
  ellipse(ballx, bally,ballSize, ballSize);
}
function levelThree(){
  fill(255);
  text("Level 1", width/2,height-20);
  var disToBall = dist(ballx, bally, mouseX, mouseY);
  if(disToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score +5;
  }
  if(score > 20){
    gameState = "L2";
    
  }
  fill(255,255,0);
  ellipse(ballx, bally,ballSize, ballSize);

}

// Made by: Priyanshu kumar