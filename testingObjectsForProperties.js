 // Object named myObj 
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};
// function named checkObj that checks for the property in the object to see if it exists
// the function uses an "if statement to find it
// the command named ".hasOwnProperty(propname)" determines if that object has the given property name.
function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)== true) {        
    console.log (myObj[checkProp])
    return myObj[checkProp];
    }
    else {
      console.log ("Not Found")
      return "Not Found";
    }
    
}

// Test your code by modifying these values
checkObj("pet");
