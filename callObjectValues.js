//With this I can call specific properties of an object using (.)

var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

var hatValue = testObj.hat; //you can see the (.) after "testObj"
var shirtValue = testObj.shirt;

 console.log(hatValue) //this should output whatewver property the hat has which is "ballcap"
 console.log(shirtValue) //this should output whatewver property the shirt has which is "jersey"
