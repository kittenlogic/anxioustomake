//ANXIOUS TO MAKE
//PUBLICITY GENERATOR
//LIAT BERDUGO + EMILY MARTINEZ


var shutterSound;
var time;
var goldframe;
var logo;

//at 100% scale, pixels where the upper RH corner of assets need to go
//to sit inside the gold frame
var innerFrameX = 161;
var innerFrameY = 140;

//arrays to store the publicity images and videos
var pubImages = [];
var pubVideos = [];

//booleans to check if we're showing an image or a video
var imageShowing = true;
var videoShowing = false;

pubImageCount = 0; //store index of current pubImage showing
pubVideoCount = 0; //store index of current pubVideo showing

var logo;
var x = 0,
  y = 0,
  z = 0; //vars to rotate logo

var scaleFactor;
var goldframeWidth = 1603;
var goldframeHeight = 997;

var paparazzi = []; //array to store paparazzi
var moneygifs = []; // array to store the money gifs
var titles = [];

var xbuffer = .03; //percent buffer f/ window edges on width
var ybuffer = .03; //percent buffer f/ window edges on height (from top)



//preload the sound, the images, and the video
function preload() {

  //preload all the publicity images
  pubImages[0] = createImg('assets/fiverrpics720/arrow1.png');
  pubImages[1] = createImg('assets/fiverrpics720/backflip.png');
  pubImages[2] = createImg('assets/fiverrpics720/billboard.png');
  pubImages[3] = createImg('assets/fiverrpics720/drone.png');
  pubImages[4] = createImg('assets/fiverrpics720/drum1.png');
  pubImages[5] = createImg('assets/fiverrpics720/elephant.png');
  pubImages[6] = createImg('assets/fiverrpics720/horse.png');
  pubImages[7] = createImg('assets/fiverrpics720/lips.png');
  pubImages[8] = createImg('assets/fiverrpics720/lizard.png');
  pubImages[9] = createImg('assets/fiverrpics720/spokesman.png');
  pubImages[10] = createImg('assets/fiverrpics720/underwater.png');
  //hide the HTML images from view
  hideAllPublicityImages();

  //preload all the videos
  pubVideos[0] = createVideo('assets/videos/coconut-tree-720.mov');
  pubVideos[1] = createVideo('assets/videos/military-jet-flyers-trimmed.mp4');
  //hide the HTML images from view
  hideAllPublicityVideos();

  //load the shutter sound
  shutterSound = loadSound('assets/shutter.mp3');

  //load all the paparazzi
  paparazzi[0] = createImg('assets/paparazzi/paparazzi1.png');
  paparazzi[1] = createImg('assets/paparazzi/paparazzi2.png');
  paparazzi[2] = createImg('assets/paparazzi/paparazzi3.png');
  paparazzi[3] = createImg('assets/paparazzi/paparazzi4.png');
  paparazzi[4] = createImg('assets/paparazzi/paparazzi5.png');
  paparazzi[5] = createImg('assets/paparazzi/paparazzi6.png');
  paparazzi[6] = createImg('assets/paparazzi/paparazzi7.png');
  paparazzi[7] = createImg('assets/paparazzi/paparazzi8.png');
  paparazzi[8] = createImg('assets/paparazzi/paparazzi9.png');
  paparazzi[9] = createImg('assets/paparazzi/paparazzi10.png');
  //hide the paparazzi images from view
  hideAllPaparazzi();

  //load the gold frame
  goldframe = createImg('assets/goldframe.png');
  goldframe.hide();

  //load all the money gifs
  moneygifs[0] = createImg('assets/gifs/animated-dollar-sign-gif.gif');
  moneygifs[1] = createImg('assets/gifs/Dollar-06-june.gif');
  moneygifs[2] = createImg('assets/gifs/dollar-sign-symbol-4.gif');
  moneygifs[3] = createImg('assets/gifs/dollar-sign-symbol-8.gif');
  moneygifs[4] = createImg('assets/gifs/dollar-sign-symbol-12.gif');
  moneygifs[5] = createImg('assets/gifs/dollar-sign-symbol-13.gif');
  moneygifs[6] = createImg('assets/gifs/dollar-sign-symbol-14.gif');
  moneygifs[7] = createImg('assets/gifs/dollar-sign-symbol-16.gif');
  moneygifs[8] = createImg('assets/gifs/dollar-sign-symbol-22.gif');
  moneygifs[9] = createImg('assets/gifs/dollar-sign-symbol-23.gif');
  moneygifs[10] = createImg('assets/gifs/dollar-sign-symbol-25.gif');
  //hide the money gifs from view
  hideAllMoneygifs();


  //load and position the logo
  logo = createImg('assets/logo-300.png');
  logo.position(0, 0);
  logo.hide();

  titles[0] = createImg('assets/pub-gen-gifs/publicity_ge_13224.gif');
  titles[1] = createImg('assets/pub-gen-gifs/publicity_ge_13582.gif');
  titles[2] = createImg('assets/pub-gen-gifs/publicity_ge_13595.gif');
  titles[3] = createImg('assets/pub-gen-gifs/publicity_ge_13616.gif');
  titles[4] = createImg('assets/pub-gen-gifs/publicity_ge_13686.gif');
  titles[5] = createImg('assets/pub-gen-gifs/publicity_ge_13697.gif');
  hideAllTitles();
}

//setup all the images and videos
function setup() {
  noCanvas();

  //initiate time, kick off the publicity
  time = millis();
  nextPublicity();

  //scaling and sizing
  scaleFactor = ((1 - (2 * xbuffer)) * windowWidth) / goldframeWidth;
  positionAllPublicityImages();
  positionAllPublicityVideos();
  positionAllTitles();
  resizeGoldFrame();

  //initialize the video counter so that it starts with a 
  //random video each time you load the website
  pubVideoCount = floor(random(0, pubVideos.length));
  println("initial pubVideoCount is " + pubVideoCount)

}


function draw() {
  // CASE I: Is an image showing? if so, and
  // if more than three seconds has elapsed, choose a nextPublicity!
  if (imageShowing) {
    if (millis() > time + 3000) {
      nextPublicity();
      time = millis(); //reset time
    }
  }
  // CASE 2: Is a video showing? if so, wait for the 
  // video to be over, then choose a nextPublicity!
  else if (videoShowing) {
    var vidmillis = pubVideos[pubVideoCount].duration() * 1000 + time; // since duration is retrieved in seconds
    // println("video duration is " + vidmillis);
    if (millis() > vidmillis) {
      pubVideos[pubVideoCount].stop();
      nextPublicity();
      time = millis(); //reset time
    }
  }

  //show the gold frame
  goldframe.show();

  //show and rotate the anxious to make logo
  logo.show();
  x += .5 % 360;
  y += .5 % 360;
  z += .5 % 360;
  logo.rotate(x, y, z); //rotates the logo .5 degrees on every axis each frame.
}

function nextPublicity() {
  //play the shutter sound
  shutterSound.play();
  
  // paparazzi[9].show();
  // paparazzi.size(1, 1)
  // var pScale = 0; 
  // pScale += 10

  
  

  //hide everything
  hideAllPublicityImages();
  hideAllPublicityVideos();

  //flip a coin! show a video 1/4 of the time
  var r = random(0, 4);

  //show a video
  if (r < 1) {
    //reset the booleans
    imageShowing = false;
    videoShowing = true;

    //show and play the video
    pubVideos[pubVideoCount].show();
    pubVideos[pubVideoCount].play();

    pubVideoCount++;
    println("pubvideocount is "+ pubVideoCount)
    if (pubVideoCount >= pubVideos.length) {
      pubVideoCount = 0;
      println("pubvideocount reset to 0!")
    }

  }

  // show an image
  else {
    //reset the booleans
    imageShowing = true;
    videoShowing = false;

    //show the image
    pubImages[pubImageCount].show();

    //increment pubImageCount and reset it if it gets too high
    pubImageCount = floor(random(0, pubImages.length));
    // if (pubImageCount > (pubImages.length - 1)) {
    //   pubImageCount = 0;
    // }
  }

  nextTitle();
  sprinkleMoneyGifs();

}

function nextTitle() {
  hideAllTitles();
  var i = floor(random(0, titles.length));
  titles[i].show();
}

function positionAllTitles() {
  for (i = 0; i < titles.length; i++) {
    var titlewidth = 590;
    var x = windowWidth / 2;
    titles[i].position(x - titlewidth / 2, (ybuffer + .02) * windowHeight);
    // titles[i].position(0,0);
  }
}

function sprinkleMoneyGifs() {
  hideAllMoneygifs();

  //choose random #between 5 and moneygifs.length to sprinkle
  var i = floor(random(5, moneygifs.length));

  for (var x = 0; x < i; x++) {
    r = floor(random(moneygifs.length))
    moneygifs[r].show();
    moneygifs[r].position(random(windowWidth), random(windowHeight));
  }

}

function hideAllPublicityImages() {
  for (i = 0; i < pubImages.length; i++) {
    pubImages[i].hide();
  }
}

function hideAllPublicityVideos() {
  for (i = 0; i < pubVideos.length; i++) {
    pubVideos[i].hide();
    pubVideos[i].stop();
  }
}

function hideAllPaparazzi() {
  for (i = 0; i < paparazzi.length; i++) {
    paparazzi[i].hide();
  }
}

function hideAllMoneygifs() {
  for (i = 0; i < moneygifs.length; i++) {
    moneygifs[i].hide();
  }
}

function hideAllTitles() {
  for (i = 0; i < titles.length; i++) {
    titles[i].hide();
  }
}

function positionAllPublicityImages() {
  for (i = 0; i < pubImages.length; i++) {
    pubImages[i].size(1280 * scaleFactor, 720 * scaleFactor);
    pubImages[i].position(innerFrameX * scaleFactor + xbuffer * windowWidth, innerFrameY * scaleFactor + ybuffer * windowHeight);
  }
}

function positionAllPublicityVideos() {
  for (i = 0; i < pubVideos.length; i++) {
    pubVideos[i].size(1280 * scaleFactor, 720 * scaleFactor);
    pubVideos[i].position(innerFrameX * scaleFactor + xbuffer * windowWidth, innerFrameY * scaleFactor + ybuffer * windowHeight);
  }
}

function windowResized() {
  //we're working with all widths of 1280px.
  //the frame is 1603 px. 
  scaleFactor = ((1 - (2 * xbuffer)) * windowWidth) / goldframeWidth;

  resizeGoldFrame();
  resizeLogo();
  positionAllPublicityImages();
  positionAllPublicityVideos()
  positionAllTitles();
}

function resizeGoldFrame() {
  goldframe.position(xbuffer * windowWidth, ybuffer * windowHeight);
  goldframe.size(goldframeWidth * scaleFactor, goldframeHeight * scaleFactor);
}

////may need to deal with this for iphones etc. but haven't done yet.
function resizeLogo() {}