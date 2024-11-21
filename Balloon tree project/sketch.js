// Balloon Tree
// Mishal
// Nov 13th 2024
//

let scale = 15;
let leafDepth = 6;

function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {
  background(255);
  let angle = map(mouseX, 0, width, 10, 35);

  drawTree(width/2, height*0.9, 90, 6, angle);
  randomSeed(5);
}

function drawLine( x1, y1, x2, y2, depth) {
  strokeWeight(map(depth, 1, 6, 1, 8));
//draw a line segment connecting (x1,y1) to (x2,y2)
  line(x1, y1, x2, y2);
  strokeWeight(1);
}

function drawTree(x1, y1, angle, depth, branchAngle) {
  if (depth > 0) {
    let x2 = x1 + (cos(radians(angle))*depth*scale); //calculate endpoints of
    // current branch 
    let y2 = y1 - (sin(radians(angle))*depth*scale); //using trig ratios. Get
    // shorter based on depth
    drawLine(x1, y1, x2, y2, depth);
    if (depth <= leafDepth){
      drawLeaf(x2, y2, depth);
    }
    //for a 2-branch tree:
    drawTree(x2, y2, angle- branchAngle, depth-1, branchAngle);
    drawTree(x2, y2, angle+ branchAngle, depth-1, branchAngle);
    drawTree(x2, y2, angle, depth - 1, branchAngle);

    drawLeaf(x2, y2, depth);
  console.log('Depth', depth, 'leafDepth', leafDepth);

  }
}

function drawLeaf(x, y, depth){
  let leafSize = random(5, map(depth, 1, leafDepth, 20, 10));
  fill(random(255), random(255), random(255));
  circle(x, y, leafSize);
}

function keyPressed(){
  // decrease leaf depth with'z', but not below 1
  if ((key === 'z' || key === 'Z') && leafDepth >= 1){
    leafDepth--;
  }
  // increase leaf depthwith 'x' , yp tp maximum depth
  if ((key === 'x' || key === 'X') && leafDepth <= 1){
    leafDepth++;
  }
}
