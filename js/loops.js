// -----while loop------ //

var i = 0
while (i < 5) {
  console.log('i is ' + i)
  i++
  // ------> always add this in
}

// -----for loop------ //
// for loops are usually a fancy loop

for (var i = 0; i < 5; i++) {
 // -------> i++ is increasing value (i += 1) ||| check the condition again, then plus one and loop.

  console.log('i is ' + i)
}

// Will _also_ print out:
// >i is 0
// >i is 1
// >i is 2
// >i is 3
// >i is 4

var car = {
  wheels: 4,
  doors: 2,
  seats: 5
}
for (var wheels in car) {
  console.log('my car has ' + car[thing] + ' ' + thing)
}
