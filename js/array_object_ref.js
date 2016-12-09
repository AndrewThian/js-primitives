// var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';
//
// friends = friends.split(',').sort();
// console.log(friends)

// 5)
//
// var myFriends = [
//   'Rickon',
//   'Meera',
//   'Hodor',
//   'Jojen',
//   'Osha',
//   'Rickard',
//   'Maester',
//   'Rodrik',
//   'Jory',
//   'Septa',
//   'Jon'
// ];
//
// var yourFriends = [
//   'Bilbo',
//   'Boromir',
//   'Elrond',
//   'Faramir',
//   'Frodo',
//   'Gandalf',
//   'Legolas',
//   'Pippin'
// ];
// var ourFriends = myFriends.concat(yourFriends);

// 6)
//
// var foods = [
//   'Popcorn',
//   'Potato chips',
//   'Shrimp',
//   'Chicken rice',
//   'Poutine',
//   'Tacos',
//   'Toast',
//   'French Toast',
//   'Crab',
//   'Pho',
//   'Lasagna',
//   'Brownie',
//   'Lobster',
//   'Donuts',
//   'Ice cream',
//   'Hamburger',
//   'Sushi',
//   'Chocolate',
//   'Pizza'
// ];
// //
// // console.log(foods.indexOf("Pho"));
//
// // 7)
//
// // console.log(foods.indexOf("Donuts"));
// console.log(foods.splice(13,1));
//
// console.log(foods);

var tom = {
  name: 'tom',
  age: 13,
  add: {
    direction: 'north',
    cordinates: [
      123124, 123123
    ]
  }
}

var sarah = {
  name: 'sarah',
  age: 13,
  add: {
    direction: 'north',
    cordinates: [
      4324325, 123123
    ]
  }
}

// function cordinateSearch (name) {
//   console.log(name['add']['cordinates'][0]) // ----> why do I put a console.log here?!
// }

function directionSearch (name) {
  (name.add.direction) // ----> why do is there a need to put a name??
}

directionSearch(sarah)

console.log(sarah.age) // ----> why is different from this?? 
