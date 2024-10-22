// cars cars cars
// Mishal
// 21 Oct 2024
//

let eastBound = [];
let westBound = [];
let trafficLight;


function setup() {
  createCanvas(windowWidth, windowHeight);
  // create 20 cars for each direction
  for(let i = 0; i < 20; i++){
    let eastCar = new Vehicle(round(random(0, 1)), color(random(255), random(255), random(255)), random(width), random(height/4, height/2-30), 1, random(2,5));
    eastBound.push(eastCar);

    let westCar = new Vehicle(round(random(0,1)), color(random(255), random(255), random(255)), random(width), random(height/2, 3*height/4), -1, random(2,5));
    westBound.push(westCar);

  }
}

function draw() {
  background(220);
  drawRoad();

  // move and siplay all vehicles
  for(let car of eastBound){
    car.drive();
  }

  for(let car of westBound){
    car.drive();
  }
}

function drawRoad () {
  fill(0);
  rect(0, 200, width, 600);

  // dashed line
  stroke(255);
  strokeWeight(5);
  for(let i = 0; i < width; i += 40){
    line(i, height/2, i + 20, height/2);
  }
}

class Vehicle {
  constructor(type, color, x, y, direction, speed) {
    this.type = type;
    this.color = color;
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.speed = speed;

  }

  display() {
    fill(this.color);
    if (this.type === 0){
      // more 3d looking car with wheels
      rect(this.x, this.y, 50, 25);
      fill(0);
      ellipse(this.x + 10, this.y + 25, 10, 10);
      ellipse(this.x + 40, this.y + 25, 10, 10);
      fill(200);
    }
    else {
      // more 3d looking truck with wheels
      rect(this.x, this.y, 80, 30);
      fill(0);
      ellipse(this.x + 15, this.y + 30, 15, 15);
      ellipse(this.x + 65, this.y + 30, 15, 15);
    }
  }

  move(){
    this.x += this.speed * this.direction;

    // wrap around screen 
    if (this.x > width){
      this.x = -80;
    } 
    else if (this.x < -80){
      this.x = width;
    }
  }
   
  drive(){
    this.move();
    this.display();
  }
}

class TrafficLight {
  constructor(){
    this.state = "green";   // green by default
    this.redFrames = 0;    // red by a timer
  }

  display(){
    fill(0);
    rect(20, 20, 20, 60);

    if (this.state === "green") {
      fill(0, 255, 0);
    }
    else {
      fill(255, 0, 0);
    }
    ellipse(30, 50, 20, 20);
  }

  isGreen(){
    // red light timer
    if(this.state === "red") {
      this.redFrames++ ;
      if (this.redFrames >= 120) {
        this.state = "green";  // turn green light after 120 frames
        this.redFrames = 0;
      }
      return false;
    }
    return true;
  }
  toggle(){
    if(this.state === "green") {
      this.state = "red";  // turn red

    }
  }
}

// mouse clicled to add cars

// function mousePressed() {
//   if(mouseButton === LEFT)
// }

