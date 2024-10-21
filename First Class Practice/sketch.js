// First Class Challenge
// Mishal
// 15th Oct 2024
//

let roundRacer1;
let roundRacer2;
let roundRacer3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  roundRacer1 = new roundRacer(height/4, 'black');
  roundRacer2 = new roundRacer(height/3, 'red');
  roundRacer3 = new roundRacer(height/6, 'blue');


}

function draw() {
  background('black');
  roundRacer1.display();
  roundRacer1.move();
  roundRacer2.display();
  roundRacer2.move();
  roundRacer3.display();
  roundRacer3.move();
}

class roundRacer {
  constructor ( yPosition , color){
    this.xPosition = 0;
    this.yPosition = yPosition;
    this.xSpeed = random(3,15);
    this.color = color;
  }
  move(){
    this.xPosition += this.xSpeed;
    if(this.xPosition > width){
      this.xPosition = 0;
    }
  }
  display(){
    fill(this.color);
    circle(this.xPosition,this.yPosition, 15);
  }
}