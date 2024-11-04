// Recman Sequence
// Mishal
// 1st Nov 2024
//

// Rules for the sequence

// sequence starts at 0
//every step we take will be one bigger than the last
//if it is possible to step backwards then do so or step forward
// backward step is only allowed if the resulting location
// is positive and we have never been to that number

// Start of the sequence: 0, 1, 3, 6, 2, 7, 13, 20, 12, 21

let sequence = [];
let arcList = [];
let currentValue = 0;
let stepAmount = 1;
let largest = 0;
let scaleAmount = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  noFill();
}

function draw() {
  background(0);
  translate(0, height/2);
  addToSequence();
  scaleAmount = lerp(scaleAmount, width/largest,0.05);
  scale(scaleAmount);
  renderArc();
}

function addToSequence(){
  let backwards = currentValue - stepAmount;
  if ( backwards > 0 && !sequence.includes(backwards)){
    arcList.push(new rArc(currentValue, backwards, sequence.length%2));
    sequence.push(backwards);
    currentValue = backwards;
    stepAmount++;
  }
  else{
    let forwards = currentValue + stepAmount;
    arcList.push(new rArc(currentValue, forwards, sequence.length%2));
    sequence.push(forwards);
    currentValue = forwards;
    stepAmount++;
    if(currentValue > largest){
      largest = currentValue;
    }
  }
}

class rArc{
  constructor(start, end, direction){
    this.start = start;
    this.end = end;
    this.direction = direction;
  }
  display(){
    let diameter = abs(this.start - this.end);
    let x = (this.start + this.end)/2 ; // center point
    strokeWeight(0.5);
    if(this.direction === 0){  //forward
      arc(x, 0, diameter, diameter,0, PI );
    }
    else{
      arc(x, 0, diameter, diameter,PI,0);
    }
  }

}


function renderArc(){
  for(let r of arcList){
    r.display();
  }
}