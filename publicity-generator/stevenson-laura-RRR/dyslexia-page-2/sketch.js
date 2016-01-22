//opacity of heart


//moving type
var l = 0;
var m = 0;
var y1 = [30,90,150,210,270,330,390,450,510,570];
var y2 = [60, 120, 180, 240, 300, 360, 420, 480, 540, 600];
var click = false;

var fade = 0;
var heartfade = 0;
var beat = false;
var backfade = 0;

function setup() {
  createCanvas(1400,700);
}

function preload() {
  heart = loadImage('assets/heart.PNG');
  back1 = loadImage('assets/back1.PNG');
}

function mousePressed() {
  clicked();

}

function draw() {
  background(0);
  if (click == true) {
   l = l + 5;
    m = m + 5;
  } 

  heartbeat();
  display();


  imageMode(CENTER);
  tint(255, backfade);
  image(back1, width / 2, height / 2 - height / 8, 1600, 1000);

  // tint(255, 10, 100, random(100,heartfade));
  // image(heart, width / 2, height / 2);


  textFont("Kozuka Gothic Pro EL");
  textAlign(CENTER);
  textSize(30);
  fill(50, fade);
  stroke(255, fade);
  text("Above average emotional ", width / 4 + width / 27, height / 3 + height / 7);
  text("intellegence and creativity.", width / 2 + width / 5, height / 3 + height / 7);



  if (m > 100 && heartfade < 130) {
    fade = fade + 0.5;
    heartfade = heartfade + 2;
  }
  if (m > 100 && backfade < 40) {

    backfade = backfade + 1;
  }

  if (m > 100 && fade < 100) {

    fade = fade + 1;
  }




  for (var i = 0; i < 40; i++) {
    textFont("Kozuka Gothic Pro EL");
    textAlign(CENTER);
    textSize(30);
    fill(0);
    stroke(255, 100);
    text("Individuals with dyslexia read far below the expexted grade level.", random(width / 2 - 3 - l, width / 2 + 3 - l), y2[i]);
    text("Individuals with dyslexia read far below the expexted grade level.", random(width / 2 - 3 + m, width / 2 + 3 + m), y1[i]);
  }




}