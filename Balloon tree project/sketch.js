// Balloon Tree
// Mishal
// Nov 13th 2024
//

let scale = 15;
let leafDepth = 18;

function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {
  drawTree(width/2, height*0.9, 90, 6);
  randomSeed(5);
}

function drawLine( x1, y1, x2, y2, depth) {
//draw a line segment connecting (x1,y1) to (x2,y2)
  line(x1, y1, x2, y2);
}

function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {
    let x2 = x1 + (cos(radians(angle))*depth*scale); //calculate endpoints of
    // current branch 
    let y2 = y1 - (sin(radians(angle))*depth*scale); //using trig ratios. Get
    // shorter based on depth
    drawLine(x1, y1, x2, y2, depth);
    //for a 2-branch tree:
    drawTree(x2, y2, angle-18, depth-1);
    drawTree(x2, y2, angle+18, depth-1);
    drawTree(x2, y2, angle, depth - 1);

    drawLeaf(x2, y2, depth);
  }
}

function drawLeaf(x, y, depth){
  let leafSize = random(5, map(depth, 1, leafDepth, 20, 10));
  fill(random(255), random(255), random(255));
  circle(x, y, leafSize);

}