var words = ["D", "Y", "S", "L","E","X","I","A"];

var num = 23;

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);

}

function draw() {
  background(0);
  
  fill(255,153,204);
  textSize(100);
  textAlign(CENTER);
  text("Extremely Imaginative",mouseX, mouseY);

  for (var i = 0; i < 7; i++) {
    stroke(255);
    noFill();
    text(words[i], random(0,width),random(height));
  }


  // ellipse(100, 200, nums[0], nums[0]);
  // ellipse(200, 200, nums[1], nums[1]);
  // ellipse(300, 200, nums[2], nums[2]);
  // ellipse(400, 200, nums[3], nums[3]);

}