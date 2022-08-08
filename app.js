// MAP FUNCTION
var bears = ['brown', 'grizzly', 'angry', 'charming'];
var mrBears = bears.map(addMister)
//Named function 
function addMister(bear) {
  return 'Mr. ' + bear;
}


// FILTER FUNCTION
var myFaveBears = bears.filter(isFavourite)
//Named function 
 function isFavourite(bear) {
  return bear === 'brown' || bear === 'angry'
}
 
const myFunctions = {
  isFavourite,
  addMister
}

console.log(myFunctions.addMister("iury"))
console.log(myFunctions.isFavourite("brown"))