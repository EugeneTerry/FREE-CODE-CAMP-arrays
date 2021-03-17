console.log('/////////////Slice///////////');
function forecast(arr) {
    return arr.slice(2, 4); // this took the items and created an array of the taken items
  }
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])); // printed out 'warm', 'sunny' only

  console.log('/////////////Spread operator///////////');

  function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      newArr.push([...arr])// this made a copy of the array and added it to the end of the array as an array
      num--;
    }
    return newArr;
  }
  console.log(copyMachine([true, false, true], 3));

  console.log('/////////////Spread out operator///////////');
  function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun'] // this allowed me to place an array in the middle of anither array
    return sentence;
  }
  console.log(spreadOut());


  let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(obj) {
    // this checks to see if the items exists in the object
  if (
    users.hasOwnProperty('Alan') &&
    users.hasOwnProperty('Jeff') &&
    users.hasOwnProperty('Sarah') &&
    users.hasOwnProperty('Ryan')
  ) {
    return true
  }
     return false
    }
  
  console.log(isEveryoneHere(users)); //this should say true

  