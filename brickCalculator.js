// function brickCalculator(numberOfFloors) {
//     const bricksPerFeet = 1000;
//     const feetPerFloor = 10;

//     if (numberOfFloors <= 0) {
//       return;
//     }

//     let totalBricks;

//     if (numberOfFloors <= 10) {
//       totalBricks = numberOfFloors * feetPerFloor * 15 * bricksPerFeet;
//     } else if (numberOfFloors <= 20) {
//       const firstTenFloors = 10 * feetPerFloor * 15 * bricksPerFeet;
//       const remainingFloors = (numberOfFloors - 10) * feetPerFloor * 12 * bricksPerFeet;
//       totalBricks = firstTenFloors + remainingFloors;
//     } else {
//       const firstTenFloors = 10 * feetPerFloor * 15 * bricksPerFeet;
//       const nextTenFloors = 10 * feetPerFloor * 12 * bricksPerFeet;
//       const remainingFloors = (numberOfFloors - 20) * feetPerFloor * 10 * bricksPerFeet;
//       totalBricks = firstTenFloors + nextTenFloors + remainingFloors;
//     }

//     return totalBricks;
//   }

//   const numberOfFloors = 45;
//   const totalBricksNeeded = brickCalculator(numberOfFloors);
//   console.log("Total bricks required:", totalBricksNeeded);

// function brickCalculator(numberOfFloors) {
//   const bricksPerFeet = 1000;
//   const feetPerFloor1 = 15;
//   const feetPerFloor2 = 12;
//   const feetPerFloor3 = 10;

//   let totalBricks = 0;

//   if (numberOfFloors <= 0) {
//     return "positive number of floors";
//   } else if (numberOfFloors <= 10) {
//     totalBricks = numberOfFloors * feetPerFloor1 * bricksPerFeet;
//   } else if (numberOfFloors <= 20) {
//     totalBricks =
//       10 * feetPerFloor1 * bricksPerFeet +
//       (numberOfFloors - 10) * feetPerFloor2 * bricksPerFeet;
//   } else {
//     totalBricks =
//       10 * feetPerFloor1 * bricksPerFeet +
//       10 * feetPerFloor2 * bricksPerFeet +
//       (numberOfFloors - 20) * feetPerFloor3 * bricksPerFeet;
//   }

//   return totalBricks;
// }

// const numberOfFloors = 45;
// const totalBricksNeeded = brickCalculator(numberOfFloors);
// console.log("Total bricks required:", totalBricksNeeded);

// function brickCalculator(numberOfFloors) {
//   const bricksPerFeet = 1000;
 

//   let totalBricks = 0;

//   if (numberOfFloors <= 0) {
//   } else if (numberOfFloors <= 10) {
//     totalBricks = numberOfFloors * 15 * bricksPerFeet;
//   } else if (numberOfFloors <= 20) {
//     totalBricks = 10 * 15 * bricksPerFeet +
//       (numberOfFloors - 10) * 12 * bricksPerFeet;
//   } else {
//     totalBricks = 10 * 15 * bricksPerFeet +
//       10 * 12 * bricksPerFeet +
//       (numberOfFloors - 20) * 10 * bricksPerFeet;
//   }

//   return totalBricks;
// }

// const numberOfFloors = 45;
// const totalBricksNeeded = brickCalculator(numberOfFloors);
// console.log("Total bricks required:", totalBricksNeeded);


function brickCalculator(floors){
  bricksPerFeet = 1000;
  var bricks = 0;

  if(floors <=10){
    bricks = floors * 10 * bricksPerFeet;
  }else if(floors <=20){
     var firstPart = 10 * 15 * bricksPerFeet;
     var remaining = floors - 10;
     var secondPart = 10 * 12 * bricksPerFeet;
     bricks = firstPart + secondPart;
  }else{
    var firstPart = 10 * 15 * bricksPerFeet;
    var secondPart = 10 * 12 * bricksPerFeet;
    var remaining = floors - 20; 
    var thirdPart = remaining * 10* bricksPerFeet;
    bricks = firstPart + secondPart + thirdPart;
  }

  return bricks;
}

var result = brickCalculator(45);
console.log(result);

function brickCalculator(floors) {
  var bricksPerFeet = 1000;
  var bricks = 0;

  if (floors <= 10) {
    bricks = floors * 10 * bricksPerFeet;
  } else if (floors <= 20) {
    var firstPart = 10 * 15 * bricksPerFeet;
    var remaining = floors - 10;
    var secondPart = remaining * 12 * bricksPerFeet;
    bricks = firstPart + secondPart;
  } else {
    var firstPart = 10 * 15 * bricksPerFeet;
    var secondPart = 10 * 12 * bricksPerFeet;
    var remaining = floors - 20;
    var thirdPart = remaining * 10 * bricksPerFeet;
    bricks = firstPart + secondPart + thirdPart;
  }

  return bricks;
}

var result = brickCalculator(45);
console.log(result);

