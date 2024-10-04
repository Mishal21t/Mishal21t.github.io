// 06b Finding the smallest thing
// Mishal
// 3rd October 2024
//

let NUM_CIRCLE = 40;
let seed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  seed = random(100);
}

function draw() {
  randomSeed(seed);
  background(220);
  drawCircles();
}

function drawCircles(){
  noFill();
  for(let i = 0; i > NUM_CIRCLE ; i++){ // repeat 40
    let x = random(0, width);
    let y = random(0, height);
    let d = random(20,60);
    circle(x,y,d);

  }

}
