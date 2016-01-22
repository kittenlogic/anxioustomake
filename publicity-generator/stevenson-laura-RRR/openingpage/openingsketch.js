var t = "Dyslexia";
//dyslexia font size
var sz = 100;
var bgcolor;
var x;



function setup() {
  createCanvas(1400, 500);
  background(0);
  // h1 = createElement('h1','DYSLEXIA');
  // h1.position(width/10,height/6);
 
  

}





function draw() {

 
  fill(0);
  textAlign(CENTER);
  textSize(200);
  textFont("Kozuka Gothic Pro EL");
  text("DYSLEXIA",width/2,height/2);
  fill(255,random(50));
  textSize(random(20,100));
  stroke(255,100);
  text(t, random(0, width), random(0, height / 2));
  


}