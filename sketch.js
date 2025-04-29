let columns = 20;
let rows = 200;

//

let font;

function preload() {
  font = loadFont("./assets/InputMonoCondensed-Light.ttf");
}

//

let cam;

function setup() {
  createCanvas(windowWidth, windowHeight, "webgl");
  angleMode(DEGREES);

  textFont(font);
  textSize(height / 10);

  cam = createCamera();
  cam.setPosition(0, -450, 900);
  cam.lookAt(0, -100, 0);
}

//

function draw() {
  background("blue");
  orbitControl();

  let angle = 360 / columns;
  let diameter = textSize();

  fill("white");

  rotateY(-frameCount);
  for (let i = 0; i < columns; i++) {
    push();
    rotateY(angle * i);
    translate(diameter, 0, 0);
    for (let j = 0; j < rows; j++) {
      const a = cos(frameCount * 5 + j * 20);
      const m = map(a, -1, 1, 0, textSize());
      push();
      translate(m, textSize() * (j - rows / 2), 0);
      text("welcome", 0, 0);
      pop();
    }
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
