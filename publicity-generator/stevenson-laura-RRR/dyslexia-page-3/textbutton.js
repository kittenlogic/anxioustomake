function textbutton(x,y) {
  this.x = random(width / 2 + 10, width / 2 - 10);
  this.y = lnpos1;
  this.flickr = 200;
  
   this.hover = function() {
    var d = dist(mouseX, mouseY, this.x, this.y)
    if (d < 100 && hi == true ) {
      this.flickr = random(10,200);
    }
  }

  this.display = function() {
    textFont("Kozuka Gothic Pro EL");
    textAlign(CENTER);
    textSize(50);
    fill(this.flickr, 50);
    stroke(this.flickr, 150);
    text(word1,this.x, this.y);
  }
  
  

  this.clicked = function() {
    var d = dist(mouseX, mouseY, this.x, this.y)
    if (d < 100 && hi == true) {
    hi = false;
  }
  }
}