// This will iterate 5 to 0 by 1's and plca it in an array
var myArray = [];
var i = 5;
while(i <= 5 && i >= 0) {
  myArray.push(i);
  i--;
}
console.log (myArray)
// it now looks like [ 5, 4, 3, 2, 1, 0 ]
