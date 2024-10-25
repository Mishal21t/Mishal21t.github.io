// Array Demo 2
// Mishal
// 25th Oct 2024
//


function draw() {
  background(220);
}
// Task 1:  Remove the last two items from the array, and add them to 
//          the start (one at a time) → [7,9,3,5]
// 
// Task 2:  Remove first item of current array, then at the start add 
//          a random amount (between 1-3) of zeros to the array beginning
//          → one possible result:  [0,0,9,3,5]      
//           
// Task 3:  Find and remove the 9 from the array
//          → one possible result:  [0,0,3,5]
//
// Use a print to console to verify each task's success.

let myArray = [3, 5, 7, 9];
let shallowCopy;
let deepCopy;

function setup() {
  // solve the tasks here
  // Task 1 - rearrange
  let lastItem = myArray.pop();
  let secondLast = myArray.pop();
  myArray.unshift(lastItem);
  myArray.unshift(secondLast);
  

  print('My Array - ' + myArray);
  shallowCopy = myArray;
  deepCopy = structuredClone(myArray);

  // Task 2 - add random zeroes or UNSHIFT RANDOM ZEROES
  myArray.shift();
  let n = random(0, 3);

  for(let i = 0; i < n ; i++) {
    myArray.unshift(0);
  }
  print('My Array - ' + myArray);
  
  // Task 3 - remove 9 from array
  for(let i = 0; i < myArray.length; i++){
    if(myArray[i] === 9){
      myArray.splice(i,1);
    }
  }
  print('My Array - ' + myArray);
  print('Shallow Array - ' + shallowCopy);
  print('deepCopy - ' + deepCopy);
}