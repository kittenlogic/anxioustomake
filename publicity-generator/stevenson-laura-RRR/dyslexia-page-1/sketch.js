var word1 = "Dyslexia is a learning ";
var word2 = "disability characterized by difficulty reading.";
var leading = 70;
var hi = true;
//blinking letters
var words = ["D", "Y", "S", "L", "E", "X", "I", "A", "D", "Y", "S", "L", "E", "X", "I", "A"];

var num = 23;
var bg = 255;
var fade = 0;
var offset = 0;
var easing = 0.05;

var button;
var brain;



function preload() { // preload() runs once
  img = loadImage('assets/skill-invert.PNG');
  brain = loadImage('assets/brain.PNG');
  faceprofile = loadImage('assets/face-profile.PNG');
}

function setup() {
  createCanvas(1400, 700);
 }
 
 
 function mousePressed(){
   clicked();
 }
 
 
 
 



  
  



function draw() {
  background(0);
  Brain();
  display();
  hover();
  

  textSize(40);
  fill(50, 100);
  stroke(255, 100);
  textFont("Kozuka Gothic Pro EL");
  if (hi == true) {
    text("Dyslexia is a learning disability\n     characterized by difficulty reading.", random(displayWidth / 3 + width / 37 + 10, displayWidth / 3 + width / 37 - 10), height / 3);
    text("Dyslexia is a learning disability\n     characterized by difficulty reading.", random(displayWidth / 3 + width / 37 + 3, displayWidth / 3 + width / 37 - 3), height / 3);
  } else {
    text("     Dyslexia is a learning style\ncharacterized by thinking multidimentionally.", random(displayWidth / 4 + 10, displayWidth / 4 - 10), random(height / 2 + height / 6 + 10, height / 2 + height / 6 - 10));
  }




  if (hi == false) {
    for (var i = 0; i < 14; i++) {
      stroke(255);
      stroke(255);
      textSize(random(20, 90));
      fill(0);
      text(words[i], random(0, displayWidth), random(0, displayHeight));
    }


    imageMode(CENTER);
    tint(255, 100);
    // image(img, width / 5, height / 2, 500, 500); // Display at full opacity
    var dx = (mouseX - img.width / 2) - offset;
    offset += dx * easing;
    tint(255, 127); // Display at half opacity
    image(img, width / 5 + offset, height / 2, 500, 500);
    image(faceprofile, width / 5 + offset * 2, height / 2, 800, 800);

  }
}

//draw box in background and on mouse 
//pressed have it become three dimentional