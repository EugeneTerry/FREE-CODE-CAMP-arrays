function randomFraction() {
 // here i used a function to Generate a Random number between 0 and 1 (decimal) with JavaScript
var result = 0;
while (result === 0) {
// Math.random() function that generates a random decimal number between 0 (inclusive) and not quite up to 1 (exclusive).
 result = Math.random();
}console.log(result)
return result;
