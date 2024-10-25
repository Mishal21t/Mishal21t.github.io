// cars cars cars
// Mishal
// 21 Oct 2024
//

let eastBound = [];
let westBound = [];
let trafficLight;
let redLightDuration = 120;
let redLightTimer = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  // create 20 cars for each direction
  for(let i = 0; i < 20; i++){
    let eastCar = new Vehicle(round(random(0, 1)), color(random(255), random(255), random(255)), random(width), random(height/4, height/2-30), 1, random(2,5));
    eastBound.push(eastCar);

    let westCar = new Vehicle(round(random(0,1)), color(random(255), random(255), random(255)), random(width), random(height/2, 3*height/4), -1, random(2,5));
    westBound.push(westCar);

  }
  // initialize traffic light 
  trafficLight = new TrafficLight();
}

function draw() {
  background(220);
  drawRoad();
  trafficLight.display(); // display traffic light in the top left corner
  // move and diplay all vehicles
  for(let car of eastBound){
    car.drive();
  }

  for(let car of westBound){
    car.drive();
  }

  //manage redLight Timer
  if (redLightTimer > 0){
    redLightTimer--; // countdown for red light timer
  }
  else{
    trafficLight.setGreen();
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

  drive() {
    if (!trafficLight.isRed()){
      this.move();
    }
    this.display();
  }

}

class TrafficLight {
  constructor(){
    this.state = "green";   // green by default
  }

  display(){
    fill(0);
    rect(20, 20, 20, 60);
    fill(this.state === "green" ? "green" : "red");
    ellipse(30, 50, 20, 20);
  }  

  isRed(){
    return this.state === "red";  // check if traffic light is red 
  }

  setRed(){
    this.state = "red";
    redLightTimer = redLightDuration;
  }

  isGreen(){
    return this.state === "green"; 
  }

  setGreen(){
    this.state = "green"; //change to green
  }

}

// mouse clicled to add cars

function mousePressed() {
  if(mouseButton === LEFT){
    if (keyIsDown(SHIFT)) {
      let newWestCar = new Vehicle(0, color(random(255), random(255), random(255)), random(width), random(300,350), -1, random(2, 5));
      westBound.push(newWestCar);
    }
    else {
      let newEastCar = new Vehicle(0, color(random(255), random(255), random(255)), random(width), random(250,300), 1, random(2, 5));
      eastBound.push(newEastCar);
    }
  }
}

// use spacebar to start the traffic light
function keyPressed() {
  if(keyCode === 32) {
    trafficLight.setRed();  // start red ligth when spacebar is pressed
  }
}



