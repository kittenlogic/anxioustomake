function heartbeat(x, y) {
  this.x = width / 2;
  this.y = height / 2;

  this.display = function() {
    imageMode(CENTER);
    tint(255, 10, 100, random(100, heartfade));
    image(heart, this.x, this.y);

  }

  this.clicked = function() {
    var d = dist(mouseX, mouseY, this.x, this.y)
    if (d < 150) {
     click=true;
    }
  }
}