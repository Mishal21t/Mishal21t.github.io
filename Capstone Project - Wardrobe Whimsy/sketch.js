// Whimsy Wardrobe
// Mishal & Cinnia
// 26 Nov, 24
//


let img;
let page; 

function preload(){
  img = loadImage('/assets/applogo3.png');
  imgTwo = loadImage('assets/appLogo2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(245, 233, 235);
  image(img, 350, width/4);
  image(imgTwo, 215, 315);

  // userLogin();

}

function appPages(){
  if(keyCode === 72){
  
  }
}
function drawLoginPage(){
  fill(245, 233, 235);
  text('User Login');



  
}

