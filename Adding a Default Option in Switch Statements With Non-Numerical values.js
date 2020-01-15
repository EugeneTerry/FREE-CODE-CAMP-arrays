//Write a switch statement to set answer for the following conditions:

//"a" - "apple"
//"b" - "bird"
//"c" - "cat"
//default - "stuff"

function switchOfStuff(val) {
  var answer = "";
 
switch(val) {
  // The non-numbers need to be in quotes here
  case "a":
    answer = "apple";
    console.log("apple");
    break;
  case "b":
    answer = "bird";
    console.log("bird");
    break;
  case "c":
    answer = "cat";
    console.log("cat");
    break;

  default:
    answer = "stuff";
    console.log("stuff");;
    break;
 }

  return answer;
}

// The non-numbers need to be in quotes here too
switchOfStuff("a");
