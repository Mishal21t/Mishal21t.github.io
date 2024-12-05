// Trend Chest
// Mishal & Cinnia
// 26 Nov, 24
//


let img;
let imgTwo;
let iconOne;
let iconTwo;
let iconThree;
let currentPage = 'homePage'; 

function HomePage(){
  background(255, 218, 224);
  if(currentPage === "homePage") {
    image(img, 350, width/4);
    image(imgTwo, 215, 315);
    image(iconOne, 384, 490, 100, 90);
    image(iconTwo, 550, 490, 100, 95 );
    image(iconThree, 220, 490, 90, 90);
  }
  thumbPrint();
}

function preload(){
  img = loadImage('/assets/applogo3.png');
  imgTwo = loadImage('/assets/appLogo2.png');
  iconOne = loadImage('/assets/HomeIcon.png');
  iconTwo = loadImage('/assets/LoginIcon.png');
  iconThree = loadImage('/assets/ExploreIcon.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 218, 224);
  textAlign(CENTER);
  textSize(16);
  text(`x: ${mouseX} y: ${mouseY}`, 50, 50);
  if(currentPage === "homePage"){
    HomePage();
  }
  else if(currentPage === "explorePage"){
    ExplorePage();
  }
  else if(currentPage === "loginPage"){
    LoginPage();
  }
  // rect(0,0,180,50)
}

function thumbPrint(){
  image(img, 8, 5, 50,40);
  textFont('Courier New');
  textSize(18);
  stroke(15);
  text('TrendChest', 114, 27);

}

function mouseClicked(){
  if(mouseX > 0 && mouseX <= 180){
    currentPage = 'homePage';
  }
  else if(mouseX > 550 && mouseX >= 490){  // Icon Two (LOGIN PAGE)
    currentPage = 'loginPage';                         
  }
  else if(mouseX > 220 && mouseY >= 490){
    currentPage = 'explorePage';
  }

}

function ExplorePage(){
  background(255, 218, 224);
  thumbPrint();

}

function LoginPage(){
  background(255, 218, 224);
  text("Enter Your Username", height/2, width/2);
  thumbPrint();
}