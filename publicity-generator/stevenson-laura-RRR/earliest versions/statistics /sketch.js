function setup() {
  for (var i = 0; i < 100; i++) {
    var p = createP('Dyslexia');
    var x = floor(random(windowWidth));
    var y = floor(random(windowHeight));
    p.position(x, y);
    p.class('apple');
  }

  for (var i = 0; i < 100; i++) {
    var p = createP('Learning Disability');
    var x = floor(random(windowWidth));
    var y = floor(random(windowHeight));
    p.position(x, y);
  }
}

function draw() {

}