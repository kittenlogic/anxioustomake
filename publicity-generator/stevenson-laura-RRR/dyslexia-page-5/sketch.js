var fly = 0;
var click = false;
var button;
var word = "in spite";



function preload() {

  heartbrainmany = loadImage('assets/heartbrainmany.PNG');
  smearedface = loadImage('assets/smearedface.PNG');
}


function mousePressed() {
  press();

}



function setup() {
  createCanvas(1400,700);
  p = createElement('p','Each case of dyslexia is unique because it results from a combination of an underlying talent, or predisposition, and from environmental influences and unsuccessful learning experiences. As a result, no two dyslexics will have exactly the same set of symptoms.Dyslexia is not a disability – its a gift. It means that I, and many other dyslexic thinkers can portray the world through images because we think in images. I can build worlds, freeze the frame, walk around and touch. I can read peoples faces, drawings, buildings, landscapes and all things in the visual world more quickly than many of my non-dyslexic friends. I paint with words; they are my colours.');
  p.position(width/30,10);
  p.style("color","#000");
  p.style("font-family","Kozuka Gothic Pro EL");
  p.style("font-size","50px");
}




function draw() {
  background(0);
  button();
  hover();
  display();

  textAlign(CENTER);
  textSize(40);
  fill(50, 100);
  stroke(255, 100);
  textFont("Kozuka Gothic Pro EL");
  text("You can be successfull", random(width / 2 + 7, width / 2 - 7), height / 3 - 100);
  text("of your dyslexia.", random(width / 2 + 7, width / 2 - 7), height / 3 + 100);

  imageMode(CENTER);
  tint(255, 10, 100, 150);
  image(heartbrainmany, width / 2, height + 1000 + fly);


  if (click == true) {

    fly = fly - 5;

  }
  


}