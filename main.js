/* This assignment will give you some practice with creating arrays and using their methods. */

// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
//
//
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
console.log("********** Challenge 1 **********");

const students = [
	"Tre",
	"Sonny",
	"Crystal",
	"Ilyas",
	"Greg",
	"Fernando",
	"Timothy",
	"Patrick",
	"Steve",
];

for (i = 0; i < students.length; i++) {
	console.log(students[i]);
}

// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
console.log("********** Challenge 2 **********");

const grades = [100, 80, 110, 75, 83, 64];

console.log(grades.reverse())
for (i = 0; i < grades.length; i++) {
	console.log(grades[i]);
}

// Challenge 3
// Console.log out only the even numbers in the following array.
console.log("********** Challenge 3 **********");

const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];

for (i = 0; i < positiveNumbers.length; i++){
  if (positiveNumbers[i] % 2 === 0){
    console.log(positiveNumbers[i])
  }
}

// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
console.log("********** Challenge 4 **********");

const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];
for (i = 0; i < mixedSignNumbers.length; i++){
  if (mixedSignNumbers[i] % 2 === 0){
    console.log(mixedSignNumbers[i])
  }
}

// Challenge 5
// Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
console.log("********** Challenge 5 **********");

const symmetricalCapitals = [
	"A",
	"H",
	"I",
	"M",
	"O",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
];
// let newArr = symmetricalCapitals.splice(0,2);
// console.log("symmetricalCapitals", symmetricalCapitals)
// console.log("newArr", newArr)
symmetricalCapitals.splice(0,2);
symmetricalCapitals.pop()

console.log("symmetricalCapitals", symmetricalCapitals)



// Challenge 6
// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
console.log("********** Challenge 6 **********");

const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
fibonacciNumbers.unshift(0,0.5)
fibonacciNumbers.push(21, 34)
console.log(fibonacciNumbers)
for (i = 0; i < fibonacciNumbers.length; i++){
  console.log(fibonacciNumbers[i])
}

// Challenge 7
// Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.
console.log("********** Challenge 7 **********");

const newArr1 = [1, 2, 3, 4, 5]
for (i = 0; i < newArr1.length; i++){
  console.log(newArr1[i])
}

// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
console.log("********** Challenge 8 **********");

const emptyArr = []
emptyArr.unshift(1,2,3)
emptyArr.push(4,5)
console.log(emptyArr)
// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
console.log("********** Challenge 9 **********");

for (i = 3; i < 11; i++) {
	console.log(students[i]);
}


// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.

console.log("********** Challenge 10 **********");

console.log("Students:", students)
let slicedStu = students.slice(3, 10)
console.log("Sliced:", slicedStu)

for (i=0; i< slicedStu.length; i++){
	console.log(slicedStu[i])
}


// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.
console.log("********** Challenge 11 **********");

console.log("Students:", students)
let slicedStu2 = students.slice(3, 10)
console.log("Sliced:", slicedStu)

for (i=0; i < slicedStu2.length; i++){
	console.log("Sliced:", slicedStu2[i])
	console.log("Original:", students[i])
}

// Challenge 12
// Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
console.log("********** Challenge 12 **********");

const dinosaurs = [
	"Velociraptor",
	"T-Rex",
	"Stegosaurus",
	"Triceratops",
	"Dimetrodon",
	"Allosaur",
	"Spinosaurus",
	"Gigantosaur",
];
let dinoSplice = dinosaurs.splice(4, 3);
console.log(dinoSplice)
for ( i=0; i<dinosaurs.length; i++){
	console.log(dinosaurs[i])
}

// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
console.log("********** Challenge 13 **********");

const bigDino = dinosaurs.concat(dinoSplice);
console.log(bigDino);
console.log(bigDino.join('*'));

// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
console.log("********** Challenge 14 **********");

console.log(dinosaurs.reverse())

// Challenge 15
// Use .concat to combine the following two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
console.log("********** Challenge 15 **********");

const primaries = ["red", "yellow", "blue"];
const secondaries = ["orange", "green", "purple"];
const colors = primaries.concat(secondaries);
for (i=0; i < colors.length; i++){
	console.log(colors[i])
}
console.log("Primaries:", primaries);
console.log("Secondaries:", secondaries)