// The object below has nested properties inside of properties 
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // I used both "dot" and brackets to access the property because one of them has more than one word in the string
console.log (gloveBoxContents)
