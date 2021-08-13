//Comparison with the Greater Than Operator

const testGreaterThan=(val)=>{
  if (val > 100) {  // Change this line
    console.log ("Over 100")
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    console.log ("Over 10")
    return "Over 10";
  }
  console.log ("10 or under")

  return "10 or Under";
}

// Change this value to test
testGreaterThan(101);
