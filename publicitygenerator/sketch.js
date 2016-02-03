//ANXIOUS TO MAKE
//PUBLICITY GENERATOR
//LIAT BERDUGO + EMILY MARTINEZ


var shutterSound;
var time;
var goldframe;
var bananas = [];
var currentBanana = 0;

//at 100% scale, pixels where the upper RH corner of assets need to go
//to sit inside the gold frame
var innerFrameX = 161;
var innerFrameY = 140;

var bananaWidth = 462;
var bananaHeight = 203;

//arrays to store the publicity images and videos
var pubImages = [];
var pubVideos = [];
var cameras = [];

//booleans to check if we're showing an image or a video
var imageShowing = true;
var videoShowing = false;

pubImageCount = 0; //store index of current pubImage showing
pubVideoCount = 0; //store index of current pubVideo showing

var logo;
var x = 0,
  y = 0,
  z = 0; //vars to rotate logo
var z1 = 0; //var to rotate the banana
var bananaclockwise = true;
var bananaShake = false;
var bananaDegreeRange = 25;

var scaleFactor;
var goldframeWidth = 1603;
var goldframeHeight = 997;

// var paparazzi = []; //array to store paparazzi
var moneygifs = []; // array to store the money gifs
var titles = [];

var xbuffer = .03; //percent buffer f/ window edges on width
var ybuffer = .03; //percent buffer f/ window edges on height (from top)



//preload the sound, the images, and the video
function preload() {

  //preload all the publicity images
  pubImages[0] = createImg('assets/fiverrpicsjpg/arrow1.jpg');
  pubImages[1] = createImg('assets/fiverrpicsjpg/backflip.jpg');
  pubImages[2] = createImg('assets/fiverrpicsjpg/billboard.jpg');
  pubImages[3] = createImg('assets/fiverrpicsjpg/drone.jpg');
  pubImages[4] = createImg('assets/fiverrpicsjpg/drum1.jpg');
  pubImages[5] = createImg('assets/fiverrpicsjpg/elephant.jpg');
  pubImages[6] = createImg('assets/fiverrpicsjpg/horse.jpg');
  pubImages[7] = createImg('assets/fiverrpicsjpg/lips.jpg');
  pubImages[8] = createImg('assets/fiverrpicsjpg/lizard.jpg');
  pubImages[9] = createImg('assets/fiverrpicsjpg/spokesman.jpg');
  pubImages[10] = createImg('assets/fiverrpicsjpg/underwater.jpg');
  //hide the HTML images from view
  hideAllPublicityImages();

  //preload all the videos
  //note to self -- should eventually put .webm video formats here also!
  pubVideos[0] = createVideo(['assets/videos/arjun.mp4', 'assets/videos/arjun.m4v']);
  pubVideos[1] = createVideo(['assets/videos/military-jet-flyers-trimmed.mp4', 'assets/videos/military-jet-flyers-trimmed.m4v']);
  pubVideos[2] = createVideo(['assets/videos/coconutNEW.mp4', 'assets/videos/coconutNEW.m4v']);
  //hide the HTML images from view
  hideAllPublicityVideos();

  //load the shutter sound
  shutterSound = loadSound('assets/shutter.mp3');

  // //load all the paparazzi
  // for (var i = 0; i < 10; i++) {
  //   var j = i + 1;
  //   var filename = "assets/paparazzi/paparazzi" + j + ".png";
  //   paparazzi.push(createImg(filename));
  // }
  // //hide the paparazzi images from view
  // hideAllPaparazzi();

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

  //load up an array with 300 cameras
  //i only have 25 gifs, hence the modulus
  for (var i = 0; i < 300; i++) {
    var j = (i + 1) % 25;
    var filename = "assets/cameras/camera" + j + ".gif";
    cameras.push(createImg(filename));
    // a = random(0, 1); println(a);
    // b = random(0,1); println(b);
    // cameras[cameras.length - 1].rotate(a, b);
  }


  //load and position the bananas
  bananas[0] = select('#bananaV0');
  bananas[1] = select('#bananaV1');
  bananas[2] = select('#bananaV2');
  bananas[3] = select('#bananaI0');
  bananas[4] = select('#bananaI1');
  bananas[5] = select('#bananaI2');
  bananas[6] = select('#bananaI3');
  bananas[7] = select('#bananaI4');
  bananas[8] = select('#bananaI5');
  bananas[9] = select('#bananaI6');
  bananas[10] = select('#bananaI7');
  bananas[11] = select('#bananaI8');
  bananas[12] = select('#bananaI9');
  bananas[13] = select('#bananaI10');



  for (var i = 0; i < bananas.length; i++) {
    bananas[i].mouseOver(makeBananaShake);
    bananas[i].mouseOut(stopBananaShake);
    bananas[i].hide();
    bananas[i].style("z-index", "100"); //make sure it's on top
  }
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
  resizeBanana();

  //initialize the video counter so that it starts with a 
  //random video each time you load the website
  pubVideoCount = floor(random(0, pubVideos.length));
  println("initial pubVideoCount is " + pubVideoCount);
  
  //debugging coconut length
  println(pubVideos[2].duration());
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

  //show and rotate the buy banana
  bananas[currentBanana].show();

  if (!bananaShake) {
    if (bananaclockwise) {
      z1 += .5;
      if (z1 > bananaDegreeRange) {
        bananaclockwise = !bananaclockwise;
      }
    }
    if (!bananaclockwise) {
      z1 -= .5;
      if (z1 < (-1 * bananaDegreeRange)) {
        bananaclockwise = !bananaclockwise;
      }
    }
    bananas[currentBanana].rotate(0, 0, z1);
  }
  if (bananaShake) {
    if (bananaclockwise) {
      z1 += 2;
      if (z1 > 5) {
        bananaclockwise = !bananaclockwise;
      }
    }
    if (!bananaclockwise) {
      z1 -= 2;
      if (z1 < (-5)) {
        bananaclockwise = !bananaclockwise;
      }
    }
    bananas[currentBanana].rotate(0, 0, z1);
  }

}

function nextPublicity() {
  //play the shutter sound
  shutterSound.play();

  //hide everything
  hideAllPublicityImages();
  hideAllPublicityVideos();
  hideAllBananas();

  //flip a coin! show a video 1/4 of the time
  var r = random(0, 4);

  //show a video, in the order they appear in the video array
  if (r < 1) {
    //reset the booleans
    imageShowing = false;
    videoShowing = true;

    //show and play the video
    pubVideos[pubVideoCount].show();
    pubVideos[pubVideoCount].play();
    currentBanana = pubVideoCount;
    println("currentBanana is " + currentBanana);

    pubVideoCount++; //for next video
    println("pubvideocount is " + pubVideoCount)
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
    currentBanana = pubImageCount + pubVideos.length; //since the banans for the vides went first

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

// function hideAllPaparazzi() {
//   for (i = 0; i < paparazzi.length; i++) {
//     paparazzi[i].hide();
//   }
// }

function hideAllMoneygifs() {
  for (i = 0; i < moneygifs.length; i++) {
    moneygifs[i].hide();
  }
}

function hideAllBananas() {
  for (i = 0; i < bananas.length; i++) {
    bananas[i].hide();
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
  resizeBanana();
}

function resizeGoldFrame() {
  goldframe.position(xbuffer * windowWidth, ybuffer * windowHeight);
  goldframe.size(goldframeWidth * scaleFactor, goldframeHeight * scaleFactor);
}

function resizeBanana() {
  for (var i = 0; i < bananas.length; i++) {
    bananas[i].size(bananaWidth * scaleFactor * 2, bananaHeight * scaleFactor * 2);
    bananas[i].position((goldframeWidth - bananaWidth * 2) * scaleFactor, (goldframeHeight - bananaHeight * 1.5) * scaleFactor)
  }
}

////may need to deal with this for iphones etc. but haven't done yet.
function resizeLogo() {}

function makeBananaShake() {
  bananaShake = true;
}

function stopBananaShake() {
  bananaShake = false;
}