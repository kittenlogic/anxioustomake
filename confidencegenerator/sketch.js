//ANXIOUS TO MAKE
//CONFIDENCE GENERATOR
//LIAT BERDUGO + EMILY MARTINEZ
//JAN 2016


var logo;
var puppetvid;
var scaleFactor;
var moreConfidence;

var input, button, greeting;
var name;
var gotName = false;

//vars to rotate logo
var x = 0,
  y = 0,
  z = 0;

var systems;
var time = [];

var confidence = [];
var currentConfidence;

//preload the sound, the images, and the video
function preload() {

  puppetvid = createVideo('assets/videos/confidence-puppet.mp4');
  // specify multiple formats for different browsers
  //fingers = createVideo(['assets/fingers.mov', 'assets/fingers.webm']);
  puppetvid.hide();
  puppetvid.addCue(45.4, clearAllConfidence) //this starts it all over when the video is done. can choose to do it differently

  //load and position the logo
  logo = createImg('assets/logo-300.png');
  logo.position(0, 0);
  logo.hide();

  moreConfidence = createImg('assets/con-gen-gifs/more-confidence.gif');
  moreConfidence.hide();
}


//setup all the images and videos
function setup() {
  createCanvas(windowWidth, windowWidth * (9 / 16)) //16:9 proportions
  systems = [];



  // //get the person's name
  // greeting = createElement('h1', 'what is your name?');
  // greeting.position(windowWidth / 2, .05 * windowHeight);

  input = createInput();
  button = createButton('submit');
  button.addClass('myButton');
  button.mousePressed(greet);


  //does this work to set all positioning
  windowResized();

}


function draw() {
  //draw the video
  image(puppetvid, 0, 0, 1920 * scaleFactor, 1080 * scaleFactor);

  if (systems.length == 0 && !gotName) {
    noStroke();
    rectMode(CENTER)
    fill(255, 255, 56);
    rect(.5 * windowWidth, .5 * height, windowWidth, .4 * height)
    fill(0);
    textSize(30)
    textAlign(CENTER);
    text("what is your name?", windowWidth / 2, .44 * height);
    //input.position(windowWidth / 4, height / 2 + 30 * scaleFactor);


  }
  //show and rotate the anxious to make logo
  logo.show();
  //only rotate the logo once they've submited their name
  if (gotName) {
    moreConfidence.show();
    x += .5 % 360;
    y += .5 % 360;
    z += .5 % 360;
    logo.rotate(x, y, z); //rotates the logo .5 degrees on every axis each frame.


    for (i = 0; i < systems.length; i++) {
      systems[i].run();
      if (millis() > (time[i] + 300)) { //add a new particle each 300 milliseconts only
        systems[i].addParticle();
        time[i] = millis(); //reset time
      }
    }
  }


}

//take this away? 
function mousePressed() {
  if (gotName) {
    this.p = new ParticleSystem(createVector(mouseX, mouseY));
    systems.push(p);
    time.push(millis()); //add an element to the time array

    if (systems.length == 1) {
      curretConfidence = name + ", you're great!";
    } else {
      var i = floor(random(0, confidence.length));
      currentConfidence = confidence[i];
    }
  }
}

function greet() {
  name = input.value();
  //greeting.html('hello ' + name + '!');
  input.value('');
  input.hide();
  button.hide();
  puppetvid.play();
  puppetvid.loop();
  gotName = true;

  currentConfidence = name + ", you're great!"

  //add a bunch of sayings to the confidence array
  confidence.push(name + " IS GREAT!")
  confidence.push("hey " + name + ", I believe in you!")
  confidence.push(name + "'s work is good!")
  confidence.push("your father believes in you,  " + name + "!")
  confidence.push(name + " will be famous")
  confidence.push(name + ", you're doing the right thing")
  confidence.push("CONFIDENCE, " + name + "!")
  confidence.push(name + " is a genius!")
  confidence.push(name + " deserves a million twitter followers!")
  confidence.push("oh " + name + ", you're the best!")
  confidence.push("oh " + name + ", you're in the right place")
  confidence.push(name + ", you're doing the right thing")
  confidence.push(name + ", YES!")
  confidence.push(name + ", you're brilliant!")
  confidence.push(name + ", you're perfect!")
  confidence.push(name + ", your work should be in the museum!")
  confidence.push(name + ", listen to me")
  confidence.push(name + ", confidence now.")
  confidence.push(name + ", I believe in you.")
  confidence.push(name + ", I see you.")
  confidence.push(name + ", your art is good!")
}

// function positionPuppet() {
//   puppetvid.size(1920 * scaleFactor, 1080 * scaleFactor);
//   // puppetvid.position(0, 0);
// }

function positionInputAndButton() {
  input.position(.25 * windowWidth, .47 * height);
  button.position(windowWidth / 2 - 62, .57 * height);
  // button.position(windowWidth / 2 - 62, height / 2 + (70 * scaleFactor));
}

function resizeConfidence() {
  //image is 1060 by 50
  moreConfidence.size(windowWidth, 50 / 1060 * windowWidth);
  moreConfidence.position(0, height - 25);
}

function windowResized() {
  //we're working with all widths of 1920px
  resizeCanvas(windowWidth, windowWidth * (9 / 16));
  scaleFactor = windowWidth / 1920;
  // positionPuppet();
  positionInputAndButton();
  resizeConfidence();
  resizeLogo();

}


//may need to deal with this for iphones etc. but haven't done yet.
function resizeLogo() {

}

// A simple Particle class
var Particle = function(position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 255.0;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
  fill(200, this.lifespan);
  textAlign(CENTER)
  text(currentConfidence, this.position.x, this.position.y);
};

// Is the particle still useful?
Particle.prototype.isDead = function() {
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  p = new Particle(this.origin);
  this.particles.push(p);
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length - 1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};

//get rid of all the systems!
function clearAllConfidence() {
  systems.splice(0, systems.length);
  println(systems.length)
}