//If you have multiple inputs with the same output, you can represent them in a switch statement like this:

function sequentialSizes(val) {
  var answer = "";
  
switch(val) {
  case 1: 
  case 2:
  case 3:
    answer = "Low";
    console.log("Low")
    break;
  case 4:
  case 5:
  case 6:
    answer = "Mid";
    console.log("Mid")
      break;
  case 7: 
  case 8:
  case 9:
    answer = "High";
    console.log("High")
}
 
  return answer;
}
//input the variable here.
sequentialSizes(9);
