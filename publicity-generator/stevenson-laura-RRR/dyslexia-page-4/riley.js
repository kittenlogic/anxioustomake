function riley(x, y) {
  this.x = width / 4 * 3 - width / 20;
  this.y = height / 2;
  this.flickr = 70;

  this.hover = function() {
    var d = dist(mouseX, mouseY, this.x, this.y)
    if (d < 250 || changed == true) {
      this.flickr = random(70, 200);

    }
  }
  this.display = function() {
    imageMode(CENTER);
    tint(255, this.flickr);
    image(rileydistract, this.x, this.y, 500, height);
  }

  this.clicked = function() {
    var d = dist(mouseX, mouseY, this.x, this.y)
    if (d < 250 && changed == false) {
      changed = true;
    } else {
      changed = false;
    }

  }



}