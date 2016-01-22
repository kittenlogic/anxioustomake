//Bryant Fukushima
//https://xarts.usfca.edu/~bmfukushima/RRR

var natureImg;
var clickCount = 0;
var flash = 10;
var flash2 = 10;
var flash3 = 10;
var flash4 = 10;
var moveHand = 50;
var moveHand2 = 0;
var moveHand3 = 217;
var canvasX = 675;
var canvasY = 900;
var movePic = 0;
var movePic1 = 0;
var shrink = 568;
var GGBpopGrow = -1;
var moveHand4 = 900;
var moveHand5 = 351;
var moveHand6 = 0;
var x = 5;
var x1 = 5;
var x2 = 5;
var x3 = 5;
var x4 = 5;

function setup() {
  createCanvas(675, 900);
  natureImg = loadImage('assets/nature.jpg');
  pScreenImg = loadImage('assets/phoneScreen.jpg');
  onRoofImg = loadImage('assets/fullRoof.jpg');
  iphoneHand = loadImage('assets/iphoneMove.png')
  fullRoofImg = loadImage('assets/fullRoof.jpg');
  onCompImg = loadImage('assets/onComp.jpg');
  computer = loadImage('assets/computer.jpg');
  phoneHold = loadImage('assets/phoneHold.jpg');
  phoneHoldclear = loadImage('assets/phoneHoldclear.png');
  webcamOne = loadImage('assets/webcamOne.png');
  popPic = loadImage('assets/popPic.png');
  desktop = loadImage('assets/desktop.jpg');
  GGBpop = loadImage('assets/GGBpop.png');
  GGB = loadImage('assets/GGB.jpg');
  GGBonPhone = loadImage('assets/GGBonPhone.png');
  GGBonPhonePic = loadImage('assets/GGBonPhonePic.png');
  woods = loadImage('assets/woods.jpg');
  GGBwebInPhone = loadImage('assets/GGBwebInPhone.png');
  woodsGGBcam = loadImage('assets/woodsGGBcam.png');
  hawaii = loadImage('assets/hawaii.jpg');
  takeYou = loadImage('assets/takeYou.png');
  phoneHoldcover = loadImage('assets/phoneHoldcover.png');
  liveLife = loadImage('assets/liveLife.png');
  intro = loadImage('assets/intro.png');
  intro1 = loadImage('assets/intro1.png');
  where = loadImage('assets/where.png');
  capture = createCapture(VIDEO);
  capture.size(50, 50);
  capture.hide();
}


function draw() {
  if (clickCount == 0) {
    background(0);
    imageMode(CENTER);
    image(intro, width / 2, 260);
    image(intro1, width / 2, 670);
    image(capture, width / 2, height / 2, 200, 200);
    imageMode(CORNER);
    fill(0);
    rect(x, 50, 600, 55);
    rect(x1, 150, 600, 55);
    rect(x2, 250, 600, 55);
    rect(x3, 590, 600, 55);
    rect(x4, 690, 600, 55);
    x = x + 5;
    if (x > 500) {
      x1 = x1 + 5;
    }
    if (x1 > 500) {
      x2 = x2 + 5;
    }
    if (x2 > 500) {
      x3 = x3 + 5;
    }
    if (x3 > 500) {
      x4 = x4 + 5;
    }
  }
  if (clickCount == 1) {
    scale(1.5);
    image(natureImg, 0, 0);
  }
  if (clickCount == 2) {
    scale(1);
    image(natureImg, 0, 0);
  }

  if (clickCount == 3) {
    image(pScreenImg, 0, 0);
  }

  if (clickCount == 4) {
    scale(1.5);
    image(onRoofImg, 0, 0);
    scale(0.8);
    image(iphoneHand, -200, moveHand);
  }

  if (clickCount == 5) {
    image(onRoofImg, 0, 0);
    image(iphoneHand, -150, moveHand);
  }

  if (clickCount == 6) {
    image(onRoofImg, 0, 0);
    image(iphoneHand, -150, moveHand);
    moveHand = moveHand + 50;
  }

  if (clickCount == 7) {
    image(onCompImg, 0, 0);
  }

  if (clickCount == 8) {
    image(computer, 0, 0);
  }

  if (clickCount == 9) {
    image(phoneHold, 0, 0);
    image(capture, 152, 165, 391, 591);
    imageMode(CENTER);
    image(takeYou, width / 2 + 15, 140);
    imageMode(CORNER);
  }

  if (clickCount == 10) {
    scale(1.5);
    image(onRoofImg, 0, 0);
    scale(1);
    image(phoneHoldclear, -200, -100);
    image(capture, 117, 121, 249, 377);
    capture.hide();
  }

  if (clickCount == 11) {
    image(onRoofImg, 0, 0);
    image(phoneHoldclear, -100, 0);
    image(capture, 217, 221, 249, 377);
  }

  if (clickCount == 12) {
    scale(1.5);
    image(natureImg, 0, 0);
    scale(1);
    image(webcamOne, -200, -125);
    image(capture, 198.5, 217, 91, 146);
  }
  if (clickCount == 13) {
    scale(1.5);
    image(natureImg, 0, 0);
    scale(1);
    image(webcamOne, -200, moveHand2);
    image(capture, 198.5, moveHand3, 91, 146);
    moveHand2 = moveHand2 + 50;
    moveHand3 = moveHand3 + 50;

  }
  if (clickCount == 14) {
    image(natureImg, 0, 0);
  }
  if (clickCount == 15) {
    image(desktop, 0, 0);
    image(popPic, 0, 0);
  }
  if (clickCount == 16) {
    image(desktop, 0, 0);
    image(popPic, movePic1, movePic, shrink);
    movePic = movePic + 50;
    movePic1 = movePic1 + 10;
    shrink = shrink - 10;
    fill(0);
    rect(50,330,555,53);
    rect(200,421,250,53);
    rect(190,510,280,53);
    imageMode(CENTER);
    image(where,width/2, height/2);
    imageMode(CORNER);
  }

  if (clickCount == 17) {
    image(desktop, 0, 0);
    scale(GGBpopGrow);
    image(GGBpop, 0, 0);
    GGBpopGrow = GGBpopGrow + .1;
    if (GGBpopGrow >= 1) {
      GGBpopGrow = 1;
    }
  }
  if (clickCount == 18) {
    image(GGB, 0, 0);
  }
  if (clickCount == 19) {
    image(GGB, 0, 0);
    image(GGBonPhone, 0, moveHand4);
    moveHand4 = moveHand4 - 50;
    if (moveHand4 = 0) {
      moveHand4 = moveHand4 - 0;
    }
  }

  if (clickCount == 20) {
    image(GGB, 0, 0);
    image(GGBonPhone, 0, 0);
    image(capture, 316, 218, 252, 380);
  }
  if (clickCount == 21) {
    scale(1.5);
    image(woods, 0, 0);
    scale(1);
    image(GGBwebInPhone, -200, -100);
    image(capture, 218, 212, 103, 158);
  }
  if (clickCount == 22) {
    image(woods, 0, 0);
    image(GGBwebInPhone, 0, 0);
    image(capture, 418, 312, 103, 158);
  }
  if (clickCount == 23) {
    scale(1.5);
    image(hawaii, 0, 0);
    scale(1);
    image(woodsGGBcam, -200, -100);
    image(capture, 261, 251, 43, 66);
  }
  if (clickCount == 24) {
    image(hawaii, 0, 0);
    image(woodsGGBcam, 0, 0);
    image(capture, 462, 351, 41, 66);
  }
  if (clickCount == 25) {
    image(hawaii, 0, 0);
    image(woodsGGBcam, 0, moveHand6);
    image(capture, 462, moveHand5, 41, 66);
    moveHand5 = moveHand5 + 50;
    moveHand6 = moveHand6 + 50;
  }

  if (clickCount == 26) {
    image(hawaii, 0, 0);
     fill(0);
    rect(180,170, 290, 85);
    rect(180, 345, 290, 85);
    rect(20, 535, 610, 85);
    imageMode(CENTER);
    image(liveLife, width / 2, height / 2 - 50);
    
  }
  if (clickCount == 27) {
    imageMode(CORNER);
    image(capture, 0, 0, width, height);
  }




  print(clickCount);
}



function mousePressed() {
  clickCount += 1;
}