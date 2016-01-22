//word that changes
var word1 = "fall behind in school.";
//var to flag when mouse pressed in draw
var hi = true;
//positions of lines of text that switch
var lnpos1 = 100;
var lnpos2 = 1000;
//array of raining letters
var letters = ["Y", "O", "U", "W", "O", "N", "T", "S", "U", "C", "C", "E", "E", "D", "K", "L", "M", "N","Y", "O", "U", "W", "O", "N", "T", "S", "U", "C", "C", "E", "E", "D", "K", "L", "M", "N"];
var places = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100];
var speed = 5;
var high = [-100, -50, -300, 0, -500, 0, -200, -100, -50, -300, -500, -75, -500, 0, -200, -100, -300, -500, -75];

var textbutton;



function preload() { // preload() runs once

  thefinger = loadImage('assets/thefinger.PNG');
  paintsmudge = loadImage('assets/paintsmudge.PNG');
  city = loadImage('assets/city.PNG');
  leftfacecopy = loadImage('assets/leftfacecopy.PNG');
  rightface = loadImage('assets/rightface.PNG');


}


function setup() {
  createCanvas(1400,700);



}

function mousePressed() {
 clicked();

 
}



function draw() {
  background(0);
  textbutton();
  hover();
  display();
  
  
  
  
  if (lnpos2 < 300) {
    tint(200,0,50);
    image(paintsmudge, 0, 0, width, mouseY + 200);
    tint(255, random(30, 70));
    imageMode(LEFT);
    image(leftfacecopy, 0, 0);
    image(rightface, width - 370, 0);
  }
  
  
  
  

  textFont("Kozuka Gothic Pro EL");
  textAlign(CENTER);
  textSize(50);
  fill(50, 50);
  stroke(255, 150);
  text("Because of this, dyslecixs often", random(width / 2 + 10, width / 2 - 10), height / 17);
  
  s="excel in areas related to visual arts,";
  text(s, random(width / 2 + 10, width / 2 - 10), lnpos2);
  text("performing arts, and psychology.", random(width / 2 + 10, width / 2 - 10), lnpos2 + height / 20);
  if (hi == false && lnpos2 > height / 11) {
    lnpos1 = lnpos1 + 3;
    lnpos2 = lnpos2 - 3;

    //raining letters
    for (var i = 0; i < letters.length; i++) {

      stroke(random(0, 170));
      noFill();
      text(letters[i], random(places[i] + 10, places[i] - 10), high[i] = high[i] + speed);
    }
  }

  if (lnpos1 > 350 && lnpos1 < 800) {
    imageMode(CENTER);
    tint(200, random(30, 70));
    image(thefinger, random(width / 2 + 5, width / 2 - 5), height / 2);
    tint(200,0,50, random(130, 170));
    image(city, width / 2, height / 8);
  }

  


}