// Here is a set of arrays with organized data to lookup called "contacts"
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
for (var x = 0; x < contacts.length; x++) {
// this above clears out the x every time the fuction is called    
    if (contacts[x].firstName === name) {
// this checks to see if the input for "firstName" matches the data in the array    
        if (contacts[x].hasOwnProperty(prop)) {
// this checks to see if there is input for "prop" that matches the data in the array
            console.log(contacts[x][prop])
            return contacts[x][prop];
        } else {
            console.log("No such property")
            return "No such property";
        }
    }
}
console.log("No such contact")
return "No such contact";
// Only change code above this line
}

lookUpProfile("Harry", "number");
