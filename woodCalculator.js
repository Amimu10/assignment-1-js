// function woodCalculator (chairs, tables, beds){

//     var woodPerChair = 1;
//     var woodPerTable = 3;
//     var woodPerBed = 5;

//     var totalWoodForChair = chairs * woodPerChair;
//     var totalWoodForTable  = tables * woodPerTable;
//     var totalWoodForBed    = beds * woodPerBed;

//     var totalWood = totalWoodForChair + totalWoodForTable + totalWoodForBed;
//     return totalWood;
// }

// var chairs = 14;
// var tables = 5; 
// var beds = 12;

// var totalWoodNeed = woodCalculator (chairs, tables, beds);
// console.log("total:" + totalWoodNeed);

function woodCalculator(chairs, tables, beds) {
    var woodPerChair = 1;
    var woodPerTable = 3;
    var woodPerBed = 5;
  
    var totalWoodForChair = chairs * woodPerChair;
    var totalWoodForTable = tables * woodPerTable;
    var totalWoodForBed = beds * woodPerBed;
  
    var totalWood = totalWoodForChair + totalWoodForTable + totalWoodForBed;
    return totalWood;
  }
  
  var chairs = 14;
  var tables = 5;
  var beds = 12;
  
  var totalWoodNeed = woodCalculator(chairs, tables, beds);
  console.log("total: " + totalWoodNeed);