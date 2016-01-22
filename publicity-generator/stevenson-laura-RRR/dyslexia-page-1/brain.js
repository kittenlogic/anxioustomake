function Brain(x, y) {
  this.x = width / 5 + width / 30;
  this.y = height / 3 + height / 19;
  this.flickr =250;
  this.display = function() {
     var d = dist(mouseX, mouseY, this.x, this.y)
    if (d < 150 && hi == true) {
      this.flickr = random(100, 200);
      
    }
    imageMode(CENTER);
    tint(255,10,100, this.flickr);
    image(brain, this.x, this.y, 500, 300);

   
  }
  
  
   this.hover = function() {
    var d = dist(mouseX, mouseY, this.x, this.y)
    if (d < 150 || hi == false) {
      flickr = random(50, 200);
    }
  }
  
  
  this.clicked = function() {
    var d = dist(mouseX, mouseY, this.x, this.y)
    if (d < 150 && hi == true) {
      hi = false;
    } else {
      hi = true;
    }
  }

 

}