var divideByThree = function (number) {  // ----> divideByThree here is the definition of a function
  var val = number * 3  //  ----> need var = val because console.log
  console.log(val)
}

divideByThree(12)

// ------------ //

var testSpeed = function (number) { // ----> whatever is in the () is a parameter of the function definition(ref line 1)!
  (number >= 70)  //  ----> don't need var val because im not logging it on the console (console.log(val))
  console.log('fuckyeah')
}

testSpeed(80)

// ------------ //

var foodDemand = function (food) {
  food.length >= 10  //  ----> combining two types of code to make a bunch of requirements
  console.log('oh yeah thats right') //  ----> logging it
}

foodDemand('eggs and sausage')

// ------------ //

var greetings = function (name) {
  console.log('Greetings ' + name + ',' + ' you ' + 'fool')
}

greetings('bob')

// ------------ //

var calculate = function (number) {
  var val = number * 10
  console.log(val)
}

calculate(10)

// ------------ //

// I wanted to calculate the cost of 5 oranges
// val = price of orange
// val.5 = cost of 5 oranges

var orangeCost = function (priceOfone) {
  console.log(priceOfone * 5)
}

orangeCost(0.2)

// ------------- //

var timesTwo = function (number) {
  return number * 2 // ----> returns the value back to the user. !question! isn't this really similar to the line 1-6, just that I don't have to determine a variable?? I know I can't set a var to (return number * 2) to test in console.
}
timesTwo(2) //  ----> this is called calling the function definition

var newNumber = timesTwo(2)
console.log(newNumber)

// ------------- //

var quarter = function (number) {
  return number / 4
}
// at this point if I call a number, this script will know that its returning a value, so what I have to do is: ref to line 71
if (quarter(24) % 3 === 0) { // ----> I have to call the function in this line too, moron!
  console.log('The statement is true')
} else {
  console.log('The statement is false')
}

// ------------- //

var perimeterBox = function (length, width) { //  ----> when using two or more parameters for your functions always remember to use return !question!! why do I have to use return??
  return length * 2 + width * 2
}

perimeterBox(1, 1)

var result = perimeterBox(1, 1)
console.log(result)
