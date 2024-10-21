// Perlin Project
// Mishal
// 5th Oct 2024



// All the variables needed

let rectWidth = 10;
let noiseStart = 0;
let noiseStep = 0.01;
let highestPeak = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  generateTerrain ();
  drawFlag();

}


function generateTerrain (){
  background(255);   //White background
  highestPeak = 0 ;
  let currentNoise = noiseStart; //start beginning of the noise
  
  for (let x = 0; x < width; x+= rectWidth){
    let rectHeight = noise(currentNoise) * height;
    rect(x, height, rectWidth, -rectHeight);
    currentNoise += noiseStep;   // for smoother terrain
  }
  if (rectHight > highestPeak){
    highestPeak = rectWidth;
    peakX = x ;  // Save the highest X value
  }
  drawFlag(peakX, height - highestPeak);
  
}

function drawFlag(x,y){
  stroke(0);
  strokeWeight(2);
  line(x + 5, y, x + 5, y - 50 );

  noStroke();
  fill(255, 0, 0);
  triangle(x + 5, y - 50, x + 5, y - 30, x + 25, y - 40);
}

function keyPressed(){
  if (keyCode === RIGHT_ARROW){
    rectWidth += 2 ;
  }
  if (keyCode === LEFT_ARROW){
    rectWidth -= 2 ; 
  }
  if (rectWidth < 1) {  // rectWidth < 1 will prevent rectWidth not goin back to -2 
    rectWidth = 1 ;
  }
  generateTerrain();

  
}

