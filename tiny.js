// function tinyFriend(names) {
  
//     var shortestName = names[0];
  
//     for (var i = 0; i < names.length; i++) {
//         var element = names[i];
//         var index = shortestName.length(element);
//         if(element < index){
//         shortestName = element;
//       }
//     }
  
//     return shortestName;
//   }
  
//   var names = ["sabbir", "Idul", "Alich", "humayun", "tansen"];
//   var shortestName = tinyFriend(names);
//   console.log("Shortest name:", shortestName);


function tinyFriend(names) {
    var shortestName = names[0];
  
    for (var i = 0; i < names.length; i++) {
      var element = names[i];
      if (element.length < shortestName.length) {
        shortestName = element;
      }
    }
  
    return shortestName;
  }
  
  var names = ["sabbir", "Idul", "Alich", "humayun", "tansen"];
  var shortestName = tinyFriend(names);
  console.log("Shortest name:", shortestName);
  
  