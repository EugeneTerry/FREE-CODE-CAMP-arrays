function testElseIf(val) {
  if (val > 10) {
    console.log ("Greater than 10")
    return "Greater than 10";
  } else if (val < 5) {
    console.log ("Smaller than 5")
    return "Smaller than 5";
  } else 
  console.log ("Between 5 and 10")
  return "Between 5 and 10";
}

// Change this value to test
testElseIf(60);
