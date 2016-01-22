var bubbles = [];
var letters =["D","Y","S"]; 

function setup() {
  createCanvas(displayWidth, displayHeight);
  for (var i = 0; i < 400; i++) {
    bubbles[i] = new Bubbles();
    letters[i];
  }
}

    function draw() {
      background(0);
      for (var i = 0; i < 400; i++) {
        bubbles[i].move();
        bubbles[i].display();
  
      }

    }
    
    function Bubbles(){
      this.x = random(0,width);
      this.y = random(0,height);
      this.display = function(){
        stroke(255);
        noFill();
        textSize(20);
        textAlign(CENTER);
        text("Dyslexia",this.x,this.y);
      }
      
      this.move = function(){
        this.x = this.x + random(-20,20);
        this.y = this.y;
      }
      
    }
    
    //   x: random(0, width),
    //   y: random(0, height),
    //   display: function() {
    //     stroke(255);
    //     noFill();
    //     ellipse(this.x, this.y, 24, 24);
    //   },
    //   move: function() {
    //     this.x = this.x + random(-5, 5);
    //     this.y = this.y + random(-5, 5);
    //   }
    // }