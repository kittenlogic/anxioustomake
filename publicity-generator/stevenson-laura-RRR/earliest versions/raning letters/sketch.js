var letters = ["A","*","B","&","C","#","D","@","E","F","G","H","I","J","K","L","M","N"];
var places = [50,100,200,300,400,500,600,700,800,900,1000,1100,50,100,200,300,400,500,600,700,800,900,1000,1100];
var speed = 5;
var high = [-100,-50,-300,0,-500,0,-200,-100,-50,-300,-500,-75,-500,0,-200,-100,-300,-500,-75];

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);

}

function draw() {
   background(0);
  
  fill(255,255,100);
  textSize(100);
  textAlign(CENTER);
  
  
    for (var i = 0; i < letters.length; i++) {
    
    stroke(random(0,255));
    noFill();
    text(letters[i], places[i],high[i]=high[i]+speed);
   }
}

