// Whimsy Wardrobe
// Mishal & Cinnia
// 26 Nov, 24
//


let img;

function preload(){
  img = loadImage('/assets/applogo3.png');
  imgTwo = loadImage('assets/appLogo2.png');
  iconOne = loadImage('assets/HomeIcon.png');
  iconTwo = loadImage('assets/ExploreIcon.png');
  iconThree = loadImage('assets/ExploreIcon2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 218, 224);
  image(img, 350, width/4);
  image(imgTwo, 215, 315);
  image(iconOne, width2, height/2 );
  image(iconTwo, width2, height/2 );
  image(iconThree, width2, height/2 );

}