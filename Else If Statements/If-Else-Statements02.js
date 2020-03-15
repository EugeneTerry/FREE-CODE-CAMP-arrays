\\ <html>
  \\ <div id="container">
  \\ </div>
\\ </html>

var num = prompt("Enter Your Number");
function testSize(num) {
if (num < 5) {
  console.log ("Tiny")
  return "Tiny"
}else if (num < 10) {
  console.log ("Small")
  return "Small"
}else if (num < 15) {
  console.log ("Medium")
  return "Medium"
}else if (num < 20) {
  console.log ("Large")
  return "Large"
}else if (num >= 20) {
  console.log ("Huge")
  return "Huge"
} 
  console.log ("Change Me")
  return "Change Me";
}
testSize(num);
