var dancingWords = [];
var wordpos1 = 100;
var wordpos2 = 220;
var wordpos3 = 340;
var wordpos4 = 480;
var wordposy = 400;
var wordfadein = 0;
var imfadein = 0;

changed = false;









function setup() {
  createCanvas(1400,700);

}


function preload() {
  rileydistract = loadImage('assets/rileydistract.PNG');
  handsleft = loadImage('assets/handsleft.PNG');
  handsright = loadImage('assets/handsright.PNG');
  distractimagine = loadImage('assets/distractimagine.PNG');

}

function mousePressed() {
  clicked();



}





function draw() {
  background(0);
  riley();
  hover();
  display();

  if (changed == true && imfadein < 100) {
    wordpos1 = wordpos1 + random(-10, 10);
    wordpos2 = wordpos2 + random(-10, 10);
    wordpos3 = wordpos3 + random(-10, 10);
    wordpos4 = wordpos4 + random(-10, 10);
    wordposy = wordposy - random(-20, 30);
    wordfadein = wordfadein + .8;
    imfadein = imfadein + .4;



  }





  if (wordposy < 50) {
    textFont("Kozuka Gothic Pro EL");
    textSize(27);
    stroke(wordfadein);
    s = "Expiriences thought as clear as reality. Vivid imagination.";
    textAlign(CENTER);
    text(s, width / 12 + random(-2, 3), height / 3 + height / 12, width / 3, height / 3);
    tint(255, imfadein);
    image(distractimagine, width / 4+width/30, height / 2);
    image(handsleft, width / 4+width/30, height / 2);
  }



  textSize(26);
  stroke(255, 100);
  textFont("Kosuka Gothic Pro EL")
  text("ZonesOut", wordpos1, wordposy);
  text("CantFocus", wordpos2, wordposy);
  text("Daydreams", wordpos3, wordposy);
  text("EaslyDistracted", wordpos4, wordposy);

}