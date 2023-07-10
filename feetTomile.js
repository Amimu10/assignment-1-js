function feetToMile(feet) {
  var feetInOnemile = 5280;
  var miles = feet / feetInOnemile;
  return miles;
}

var feet = 50000;
var miles = feetToMile(feet);
console.log(feet + " feet is equal to " + miles + " miles.");


