// Perlin Noise Demo
// Mishal
// Sept 27, 2024

// noise() vs random()
let circleTime = 5; 
let circleInterval = 0.03; //amount to push clock forward


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15);
}

function draw() {
  background(255);
  line(width/2,0,width/2,height);
  //random()
  randomCircle();
  //noise()
  noiseCircle();
  staircase();
}

function noiseCircle(){
  // Draw a circle on the screnn using noise() for random values
  //(diameter , then color)
  let cSize = noise(circleTime); //0-1
  cSize = map(cSize, 0, 1, 10, 255);
  fill(cSize, cSize/2, 255-cSize)
  circle(width*0.75, height/2, cSize);
  text(round(cSize), width * 0.75, height/2);
  circleTime += circleInterval;

}


function randomCircle(){
  //draw a circle on the screen, using 
  //random values for the diameter  (later, color)
  let cSize = random(10,255);
  fill(cSize, cSize/2, 255-cSize);
  circle(width*0.25, height/2, cSize);
  textAlign(CENTER, CENTER);
  textSize(30);
  text(round(cSize), width * 0.25, height/2);
}

function staircase(){
  // use a for loop to drawa series of rectangles for use as train
  randomSeed(1);
  let rectWidth = 20;
  for(let x = 0; x <= width; x += rectWidth){
    noFill(0);
    // regenatre a random height for each rect
    let rectHeight = random(50,500);
  rect(x, height, rectWidth, -rectHeight);

  }
}

