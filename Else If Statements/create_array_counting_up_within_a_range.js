function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) { //makes sure that array is just one number if the start and the end are the same
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum); //push places the item at the end of an array
  return numbers
  }
}
console.log(rangeOfNumbers(6, 10)); // should display [ 6, 7, 8, 9, 10 ]
