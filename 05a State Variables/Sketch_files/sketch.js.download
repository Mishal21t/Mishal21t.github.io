// State Variables
// Mishal
// 25th Sep 2024
//

//Global Variables
let currentColor = 0;  // 0, 1, 2
let myColor;
let circleSize = 50;
let growing = false;  //2-state variable

function setup() {
  createCanvas(windowWidth, windowHeight);
  myColor = color(200,120,210);
}

function draw() {
  background(220);
  // circle code - fill color. using switch statement
  switch(currentColor){
    case 0:
      fill(255,0,0);
      break;
    case 1:
      fill(myColor);
      break;
    case 2:
      fill(0,50,210);
      break;
  }

  // circle code - drawing the circle
  if(growing) circleSize += 2;
  else circleSize -= 2;
  // circle code - drawing the circle
  circle(width/2,height/2, circleSize); 


if(frameCount % 10 === 0){
  currentColor += 1;
  if(currentColor > 2) currentColor = 0;
}

}

function keyPressed() {
  if (key === "a") {
    growing = !growing;
  }
}
