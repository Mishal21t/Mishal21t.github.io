// cars cars cars
// Mishal
// 21 Oct 2024
//

let eastBound = [];
let westBound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // create 20 cars for each direction
  for(let i = 0; i < 20; i++){
    let eastCar = new Vehicle(random(0,1), color(random(255), random(255), random(255)), random(width), random(150, 200), 1, random(2,5));
    eastBound.push(eastCar);

    let westCar = new Vehicle(random(0,1), color(random(255), random(255), random(255)), random(width), random(250, 300), -1, random(2,5));
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
  rect(0, 150, width, 200);

  // dashed line
  stroke(255);
  strokeWeight(5);
  for(let i = 0; i < width; i += 40){
    line(i, 250, i + 20, 250);
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
      // simple car
      rect(this.x, this.y, 40, 20);
    }
    else {
      // simple truck
      rect(this.x, this.y, 60, 30);
    }
  }

  move(){
    this.x += this.speed * this.direction;

    // wrap around screen 
    if (this.x > width){
      this.x = -60;
    } 
    else if (this.x < -60){
      this.x = width;
    }
  }
   
  drive(){
    this.move();
    this.display();
  }
}