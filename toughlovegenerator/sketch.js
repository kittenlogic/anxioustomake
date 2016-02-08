//ANXIOUS TO MAKE
//TOUGH LOVE GENERATOR
//LIAT BERDUGO + EMILY MARTINEZ
//JAN 2016


var logo;
var coachvid;
var scaleFactor;
var time

var input, button, greeting;
var name;
var gotName = false;

//vars to rotate logo
var x = 0,
  y = 0,
  z = 0;

var messageBoolean = false;
var message;
var wannabeBoolean = false;
var wannabe;
var listenBoolean = false;
var listen;
var bumBoolean = false;
var bum;
var quitBoolean = false;
var quit;
var hamburgerBoolean = false;
var hamburger;
var putBoolean = false;
var put;
var basementBoolean = false;
var basement;
var passionBoolean = false;
var passion;
var heartBoolean = false;
var heart;
var betterBoolean = false;
var better;
var harderBoolean = false;
var harder;
var dedicatedBoolean = false;
var dedicated;
var crapBoolean = false;
var crap;


//preload the sound, the images, and the video
function preload() {

  coachvid = createVideo('assets/videos/tough-love-artist-or-bum540.mp4');
  // specify multiple formats for different browsers
  //fingers = createVideo(['assets/fingers.mov', 'assets/fingers.webm']);
  coachvid.hide();
  coachvid.addCue(2.3, messageCue);
  coachvid.addCue(3.5, wannabeCue);
  coachvid.addCue(20.8, listenCue);
  coachvid.addCue(25.6, bumCue);
  coachvid.addCue(29.8, quitCue);
  coachvid.addCue(32.7, hamburgerCue);
  coachvid.addCue(47.3, putCue);
  coachvid.addCue(50.6, basementCue);
  coachvid.addCue(55.63, passionCue);
  //coachvid.addCue(58.76, heartCue);
  coachvid.addCue(65.43, betterCue);
  coachvid.addCue(67.33, harderCue);
 // coachvid.addCue(74.5, dedicatedCue);
  coachvid.addCue(80, crapCue);


  //load and position the logo
  logo = createImg('assets/logo-300.png');
  logo.position(0, 0);
  logo.hide();

  listenUpGif = createImg('assets/tough-gen-gifs/listen-up.gif');
  listenUpGif.hide();
}


//setup all the images and videos
function setup() {
  createCanvas(windowWidth, windowWidth * (9 / 16)) //16:9 proportions
  systems = [];

  input = createInput();
  button = createButton('submit');
  button.addClass('myButton');
  button.mousePressed(greet);

  //does this work to set all positioning
  windowResized();

  //initiate time
  time = millis();

}


function draw() {
  //draw the video
  image(coachvid, 0, 0, 1920 * scaleFactor, 1080 * scaleFactor);

  if (!gotName) {
    noStroke();
    rectMode(CENTER)
    fill(255, 255, 56);
    rect(.5 * windowWidth, .5 * height, windowWidth, .4 * height)
    fill(0);
    textSize(30)
    textAlign(CENTER);
    text("write your name in ALL CAPS:", windowWidth / 2, .44 * height);
    //input.position(windowWidth / 4, height / 2 + 30 * scaleFactor);
  }

  //show anxious to make logo
  logo.show();

  //only rotate the logo once they've submited their name
  if (gotName) {
    listenUpGif.show();
    x += .5 % 360;
    y += .5 % 360;
    z += .5 % 360;
    logo.rotate(x, y, z); //rotates the logo .5 degrees on every axis each frame.
  }


  showPhrase(messageBoolean, message);
  showPhrase(wannabeBoolean, wannabe);
  showPhrase(listenBoolean, listen);
  showPhrase(bumBoolean, bum);
  showPhrase(quitBoolean, quit);
  showPhrase(hamburgerBoolean, hamburger);
  showPhrase(putBoolean, put);
  showPhrase(basementBoolean, basement);
  showPhrase(passionBoolean, passion);
  showPhrase(heartBoolean, heart);
  showPhrase(betterBoolean, better);
  showPhrase(harderBoolean, harder);
  showPhrase(dedicatedBoolean, dedicated);
  showPhrase(crapBoolean, crap);
}


function showPhrase(myBoolean, myMessage) {
  if (myBoolean) {
    myMessage.rotate(0, 0, z);
    //only show this message for 7 seconds:
    if (millis() > time + 7000) {
      myBoolean = !myBoolean; //flip the boolean back to false;
    }
  }
  if (!myBoolean) {
    if (myMessage != null) {
      myMessage.hide();
    }
  }
}


function greet() {
  name = input.value();
  //greeting.html('hello ' + name + '!');
  input.value('');
  input.hide();
  button.hide();
  coachvid.play();
  coachvid.loop();
  gotName = true;


}


function positionInputAndButton() {
  input.position(.25 * windowWidth, .47 * height);
  button.position(windowWidth / 2 - 62, .57 * height);
  // button.position(windowWidth / 2 - 62, height / 2 + (70 * scaleFactor));
}

function resizeConfidence() {
  //image is 879 by 50
  listenUpGif.size(windowWidth, 50 / 879 * windowWidth);
  listenUpGif.position(0, height - 25);
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



function messageCue() {
  message = createP("MESSAGE FOR " + name);
  message.position(random(.9 * windowWidth), random((.8 * windowHeight) * (9 / 16)))
  messageBoolean = true;
  time = millis();
}

function wannabeCue() {
  wannabe = createP("WANNABE");
  wannabe.position(random(.9 * windowWidth), random((.8 * windowHeight) * (9 / 16)))
  wannabeBoolean = true;
  time = millis();
}

function listenCue() {
  listen = createP("Listen to Me,  " + name + "!");
  listen.position(random(windowWidth-windowWidth*.15), random((.8 * windowHeight) * (9 / 16)))
  listenBoolean = true;
  time = millis();
}

function bumCue() {
  bum = createP(name + ", you're a BUM!  ");
  bum.position(random(windowWidth-windowWidth*.15), random((.8 * windowHeight) * (9 / 16)))
  bumBoolean = true;
  time = millis();
}

function quitCue() {
  quit = createP("Quit now,  " + name + "!");
  quit.position(random(windowWidth-windowWidth*.15), random((.8 * windowHeight) * (9 / 16)))
  quitBoolean = true;
  time = millis();
}

function hamburgerCue() {
  hamburger = createP("HAMBURGERS HAMBURGERS HAMBURGERS");
  hamburger.position(random(windowWidth-windowWidth*.15), random((.8 * windowHeight) * (9 / 16)))
  hamburgerBoolean = true;
  time = millis();
}

function putCue() {
  put = createP("PUT SOMETHING INTO IT,  " + name + "!");
  put.position(random(windowWidth-windowWidth*.15), random((.8 * windowHeight) * (9 / 16)))
  putBoolean = true;
  time = millis();
}

function basementCue() {
  basement = createP("Get outta the basement,  " + name + "!");
  basement.position(random(windowWidth-windowWidth*.15), random((.8 * windowHeight) * (9 / 16)))
  basementBoolean = true;
  time = millis();
}

function passionCue() {
  passion = createP("PASSION PASSION PASSION PASSION PASSION PASSION PASSION PASSION PASSION PASSION PASSION PASSION PASSION PASSION PASSION PASSION PASSION PASSION PASSION PASSION PASSION");
  passion.position(random(windowWidth-windowWidth*.15), random((.8 * windowHeight) * (9 / 16)))
  passionBoolean = true;
  time = millis();
}

function heartCue() {
  heart = createP("Do you have heart, " + name + "?");
  heart.position(random(windowWidth-windowWidth*.15), random((.8 * windowHeight) * (9 / 16)))
  heartBoolean = true;
  time = millis();
}

function betterCue() {
  better = createP("DO IT BETTER, " + name + "!");
  better.position(random(windowWidth-windowWidth*.15), random((.8 * windowHeight) * (9 / 16)))
  betterBoolean = true;
  time = millis();
}

function harderCue() {
  harder = createP("TRY HARDER, " + name + "!");
  harder.position(random(windowWidth-windowWidth*.15), random((.8 * windowHeight) * (9 / 16)))
  harderBoolean = true;
  time = millis();
}

function dedicatedCue() {
  dedicated = createP(name+ ", YOU NEED DEDICATION!");
  dedicated.position(random(windowWidth-windowWidth*.15), random((.8 * windowHeight) * (9 / 16)))
  dedicatedBoolean = true;
  time = millis();
}

function crapCue() {
  crap = createP("MAKE YOUR CRAP " + name + "!");
  crap.position(random(windowWidth-windowWidth*.15), random((.8 * windowHeight) * (9 / 16)))
  crapBoolean = true;
  time = millis();
}