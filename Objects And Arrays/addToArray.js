console.log('///////////Adding stuff to an Array in an object//////////')
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };

  const addFriend = (userObj, friend) => {// this funstion takes the two perameters and adds the input
    userObj.data.friends.push(friend)
    return userObj.data.friends;
  
  }
  console.log(addFriend(user, 'Pete')); //this is the input that userObj and friend becomes