// OOP Pair Programming Starter Code
// Mishal
// 17th oct 2024

let MOVE_BY = 10;
let bullets = [];
let bullet_speedX = 5;
let bullet_speedY = 5;
let enterprise;
let shipImage, bulletImage;

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width/2, height/2, shipImage);
}

function draw() {
  background("black");
  enterprise.update();
  enterprise.display();
  for (let i = 0; i < bullets.length; i++){
    bullets[i].display();
    bullets[i].update();
  }
}

function keyPressed() {
  enterprise.handleKeyPress();
}

// ------------------------------------------------------------------------- //
// Start editing here!

class Ship {
  constructor(x, y, theImage) {
    this.x = x;
    this.y = y;
    this.theImage = theImage;
    // define the variables needed for this ship
  }

  update() {
    // move ship -- you might want to use the keyIsDown() function here
    if (keyIsDown(LEFT_ARROW)){
      this.x -= MOVE_BY;
    }
    else if (keyIsDown(RIGHT_ARROW)){
      this.x += MOVE_BY;
    }
    if (keyIsDown(UP_ARROW)){
      this.y -= MOVE_BY;
    }
    else if (keyIsDown(DOWN_ARROW)){
      this.y += MOVE_BY;
    }


    // if doing extra for experts, show bullet(s)
  }

  display() {
    // show the ship
    image(this.theImage, this.x, this.y);
  }

  handleKeyPress() {
    // you only need to use this if you are doing the extra for experts...
    if(keyIsDown(32)){
      bullets.push(new Bullet(this.x, this.y, bullet_speedX, bullet_speedY, bulletImage));
    }
    // if you are, you should make a bullet if the space key was pressed
  }
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dx, dy, theImage) {
    // define the variables needed for the bullet here
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.theImage = theImage;
  }

  update() {
    // what does the bullet need to do during each frame? how do we know if it is off screen?
    if (!this.isOnScreen) bullets.shift();
    this.y -= this.dy;

  }

  display() {
    // show the bullet
    image(this.theImage, this.x, this.y);
  }

  isOnScreen() {
    // check if the bullet is still on the screen
    if (this.y > 0) return true ;
     return false ;
    
     

  }
}

