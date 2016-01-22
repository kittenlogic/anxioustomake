var words = ["hi", "my", "names", "laura"];
var num = 50;
var index = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(0);
  fill(255);
  textSize(50);
  text(words[index], width / 2, height / 2);

}

function mousePressed() {
  index = index + 1;

  if (index == words.length) {
    index =0
  }
}