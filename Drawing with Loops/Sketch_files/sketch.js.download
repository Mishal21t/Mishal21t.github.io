// Drawing with Loops
// Mishal
// 19 Sep 2024


function setup() {
  createCanvas(windowWidth, windowHeight);
  // frameRate(1); used for the speed of animation
}

function draw() {
  myBackground();
  myForeground();
  // this is whee the the screen actually draws the frame
}

function myBackground(){
  // use some loops tocreate gradient background
  // y : 800, 700  600... 0
  background(200);
  let rectHeight = 20
  noStroke();
  for(let y = height; y >= 0 ; y -= 100) {
    rect(0,y,width,100);
    let value = map(y,0,height,0,255);
    fill(value,255-value,255-value);
    rect(0, y, width, rectHeight);

  }
}

function myForeground(){
  //Draw some shapes using FOR/ WHILE loops
    // var   // cond // modification of var
    // x : 0 1 2 3 4 5 6 
  for(let x = 0; x < width ; x+= 40){
    fill(0);
    circle(x, height/2, 40);
    fill(255);
    text(x, x, height/2);
  }

  // create stars  X100
  let starCount = 0
  randomSeed(5);
  while(starCount < 100){
  fill(255, 0, 0);
  let x = random(0, width);
  let y = random(0, height);
  circle(x,y,10);
    starCount++;
  }
}