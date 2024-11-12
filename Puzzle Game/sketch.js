// Puzzle Game
// Mishal
// 29th Oct 2024
//


//Insert your Comment Header here.

let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let isCrossPattern = true;
let patternType = "cross";
let gridData = [[0,0,0,0,0],
                [0,0,0,0,0],
                [0,255,0,0,0],
                [255,255,255,0,0]];



function setup() {
  // Determine the size of each square. Could use windowHeight,windowHeight  for Canvas to keep a square aspect ratio
  createCanvas(windowWidth, windowHeight);
  rectWidth = width/NUM_COLS;
  rectHeight = height/NUM_ROWS;
  randomizeGrid();
}

function draw() {
  background(220);
  determineActiveSquare();   //figure out which tile the mouse cursor is over
  drawGrid();                //render the current game board to the screen (and the overlay)
  win();
}


function keyPressed(){
  if(keyCode === 32){
    if (patternType === "cross"){
      patternType = "square";
    }
    else{
      patternType = "cross";
    }
    console.log('pressed', patternType);
  }
}    
function mousePressed(){
  // cross-shaped pattern flips on a mouseclick. Boundary conditions are checked within the flip function to ensure in-bounds access for array
  if(keyIsDown(SHIFT)){      // if shift key is clicked then flip that specfic box
    flip(currentCol, currentRow);
  }      
  else{
    if (patternType === "cross"){
      flip(currentCol, currentRow);
      flip(currentCol-1, currentRow);
      flip(currentCol+1, currentRow);
      flip(currentCol, currentRow-1);
      flip(currentCol, currentRow+1);
    } else if (patternType === "square") {
      // square pattern flip (center and all four blocks)
      for(let dx = -1; dx <=1; dx++){
        for(let dy = -1; dy <= 1; dy++){
          flip(currentCol + dx, currentRow + dy);
        } 
      }
    }
  }
}

function flip(col, row){
  // given a column and row for the 2D array, flip its value from 0 to 255 or 255 to 0
  // conditions ensure that the col and row given are valid and exist for the array. If not, no operations take place.
  if (col >= 0 && col < NUM_COLS ){
    if (row >= 0 && row < NUM_ROWS){
      if (gridData[row][col] === 0) gridData[row][col] = 255;
      else gridData[row][col] = 0;
    }
  }
}

function determineActiveSquare(){
  // An expression to run each frame to determine where the mouse currently is.
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}

function drawGrid(){
  // Render a grid of squares - fill color set according to data stored in the 2D array
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      fill(gridData[y][x]); 
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);

      // overlay for squares that would flip on click
      if(x === currentCol && y === currentRow ||
        x === currentCol -1 && y === currentRow ||
        x === currentCol + 1 && y === currentRow ||
        x === currentCol && y === currentRow - 1 ||
        x === currentCol && y === currentRow + 1 ) {
        fill(255, 0, 0, 100);
        rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
      } else if (patternType === "square" && x >= currentCol - 1 && x <= currentCol + 1 &&
                y >= currentRow - 1 && x <= currentRow + 1) {
        fill(255,0,0,100);
        rect(x* rectWidth, y * rectHeight, rectWidth, rectHeight);
      }
    }
  }
}


function win(){
  let endMatch = gridData[0][0];
  for(let y = 0; y < NUM_COLS; y++){
    for(let x = 0; x < NUM_ROWS; x++){
      if(gridData[x][y] !== endMatch)
        return ;
    }
  }
  textSize(35);
  fill("green");
  text("You Win", width/2, height/2);
  fill(0);
}

function randomizeGrid(){
  for(let row = 0; row < NUM_ROWS;  row++){
    for(let col = 0; col < NUM_COLS; col++) {
      let gridNumber = round(random(0, 1));
      if(gridNumber === 1){
        gridData[row][col] = 255;
      } 
      else {
        gridData[row][col] = 0; 
      }
    }
  }
}