
// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
//Here I added to the object by using the dot or brackets
myDog.bark = "woof";
myDog["bark"] = "woof";
//Here I deleted from the object by using the dot or brackets
delete myDog["tails"];
delete myDog.tails;
