/*
 * @name Load and Display Image
 * @description Images can be loaded and displayed to the screen at their
 * actual size or any other size.
 * <p><em><span class="small"> To run this example locally, you will need an 
 * image file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">
 * local server</a>.</span></em></p>

 */
var img, x, y, time; // Declare variable 'img'.
aspect = 780 / 440; // width/height

function setup() {
  noCanvas();
  img = createImg("assets/moonwalk.jpg"); // Load the image
  img.show()
  x = 1
  y = x / aspect;
  print(y)
}

function draw() {
  if (millis() < time + 1000) {
    img.position(windowWidth / 2 - x / 2, 0)
    img.size(x, y);
    x += 50
    y = x / aspect;
  }
  else

}

function explode() {
  time = millis();
}