// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectwidth = 10;
let noiseStart = 0;
let noiseStep = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}


function generateTerrain (){
  background(255);   //White background
  let currentNoise = noiseStart; //start beginning of the noise
  
  for (let x = 0; x < width; x+= rectWidth){
    let rectHeight = noise(currentNoise) * height;
    rect(x, height, rectWidth, -rectHeight);
    currentNoise += noiseStep
  }


}