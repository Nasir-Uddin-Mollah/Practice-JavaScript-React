<<<<<<< HEAD
// Array Methods Example
let arr = [1, 4, 3, 5, 2, 6];
console.log(arr.length);

let arr2 = arr.toString();
console.log(arr);
console.log(arr2);
console.log(arr2.length);

console.log(arr.at(4));
console.log(arr[4]); // Both will output the same value

let arr3 = [9, 10, 8, 4, 11, 7];
let arr4 = arr.concat(arr3); // Concatenates arr and arr3
console.log(arr4);

console.log(arr.join(" - "));

let num = arr.pop();
console.log(num); //removed element

arr.push(100);
let num2 = arr.push(100);
console.log(num2); //length of the array after push

let shftval = arr.shift(); //removes first element
console.log(shftval); //removed element
console.log(arr); // Array after shift

let unshftval = arr.unshift(200); //adds element at the beginning
console.log(unshftval); //length of the array after unshift
console.log(arr); // Array after unshift

let arr5 = arr.concat(500);
console.log(arr5); // Concatenates 500 to arr

arr.copyWithin(2, 0);
console.log(arr); // Array after copyWithin

let ar = [[1, 3], [2, 4], [5, 6], [8, 9]];
let flatArr = ar.flat(); // Flattens the nested array
console.log(flatArr);

let newArr = arr.flatMap(x => [x, x * 2]);
console.log(newArr);

let sp = [1, 2, 3, 4, 5];
let spliced = sp.splice(1, 3, 10, 20); // Removes 3 elements starting from index 1 and adds 10, 20
console.log(spliced); // Elements removed
console.log(sp);


let tosp = [1, 2, 3, 4, 5];
let toSpliced = tosp.toSpliced(1, 3, 10, 20); // Creates a new array with elements replaced
console.log(toSpliced); // New array after toSpliced
console.log(tosp); // Original array remains unchanged


let sl = [1, 2, 3, 4, 5];
let sliced = sl.slice(3); // Slices the array from index 3 to the end
let sliced2 = sl.slice(1, 3); // Slices the array from index 1 to index 3 (exclusive)
console.log(sliced); // Sliced array from index 3
console.log(sliced2); // Sliced array from index 1 to 3
console.log(sl); // Original array remains unchanged



// Array Search Example
let arr6 = [1, 2, 3, 4, 5, 6, 5, 7, 8, 9];
let index = arr6.indexOf(5); // Finds the index of 5
let index2 = arr6.indexOf(5, 6); // Finds the index of 5 starting from index 6
console.log(index2); // Outputs: -1 
console.log(index); // Outputs: 4 // First occurrence of 5
let lastIndex = arr6.lastIndexOf(5); // Finds the last index of 5
console.log(lastIndex); // Outputs: 6 // Last occurrence of 5
let includesVal = arr6.includes(5); // Checks if 5 is in the array
console.log(includesVal); // Outputs: true
let findval = arr6.find(x => x > 5); // Finds the first element greater than 5
console.log(findval); // Outputs: 6
let findIndexVal = arr6.findIndex(x => x > 5); // Finds the index of the first element greater than 5
console.log(findIndexVal); // Outputs: 5
let findLastVal = arr6.findLast(x => x > 5); // Finds the last element greater than 5
console.log(findLastVal); // Outputs: 9
let findLastIndexVal = arr6.findLastIndex(x => x > 5); // Finds the index of the last element greater than 5
console.log(findLastIndexVal); // Outputs: 9


// Array Sort Example(Alphabetically)
let arr7 = [1, 4, 13, 15, 2, 6];
let sortedArr = arr7.sort(); // Sorts the array in ascending order
console.log(sortedArr); // Outputs: [1, 2, 3, 4, 5, 6]

let arr8 = [2, 13, 1, 17, 4, 9, 8];
arr8.reverse(); // Reverses the array
console.log(arr8); // Outputs: [8, 9, 4, 7, 1, 3, 2]

let arr9 = [5, 13, 6, 1, 4, 2, 19, 7];
let sortedArr3 = arr9.toSorted(); // Creates a new sorted array
console.log(sortedArr3); // Outputs: [1, 2, 3, 4, 5, 6, 7, 9]
console.log(arr9); // Original array remains unchanged;
let toreversedArr = arr9.toReversed(); // Creates a new reversed array
console.log(toreversedArr); // Outputs: [7, 9, 2, 4, 1, 6, 3, 5]
console.log(arr9); // Original array remains unchanged


// Numeric Sort Example
let numArr = [1, 4, 13, 5, 2, 16];
let numSortedArr = numArr.sort((a, b) => a - b); // Sorts the array in ascending order numerically
console.log(numSortedArr); // Outputs: [1, 2, 4, 5, 13, 16]
let numSortedArr2 = numArr.sort((a, b) => b - a); // Sorts the array in descending order numerically
console.log(numSortedArr2); // Outputs: [16, 13, 5, 4, 2, 1]


// Array Min and Max Example
let arr10 = [1, 4, 13, 5, 16, 2];
let minVal = Math.min.apply(null, arr10); // Finds the minimum value in the array
let maxVal = Math.max(...arr10); // Finds the maximum value in the array
console.log(minVal); // Outputs: 1
console.log(maxVal); // Outputs: 16


const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];
let sortedCars = cars.sort((a, b) => a.year - b.year); // Sorts the array of objects by year
console.log(sortedCars);



// Array Iteration Example
let arr11 = [1, 2, 3, 4, 5];
arr11.forEach(func);
function func(value, index, array) {
    console.log(`Value: ${value}, Index: ${index}, Array: ${array}`);
}

let arr12 = arr11.map(func2);
function func2(value, index, array) {
    return value * 2; // Returns a new array with each element multiplied by 2
}
let arr13 = arr11.map(x => x * 2); // Using arrow function for the same operation
console.log(arr12); // Outputs: [2, 4, 6, 8, 10]
console.log(arr13); // Outputs: [2, 4, 6, 8, 10]

let arr14 = arr11.flatMap((x) => x * 2);
console.log(arr14); // Outputs: [2, 4, 6, 8, 10]

let over3 = arr11.filter(x => x > 3); // Filters the array to get elements greater than 3
console.log(over3); // Outputs: [4, 5]

let sum = arr11.reduce(func3);
function func3(total, value, index, array) {
    return total + value; // Sums up all elements in the array
}
console.log(sum);

let sum2 = arr11.reduce((total, value) => total + value); // Using arrow function for the same operation
console.log(sum2); // Outputs: 15

let sum3 = arr11.reduce((total, value) => total + value, 10); // Starts with an initial value of 10
console.log(sum3); // Outputs: 25


let sum4 = arr11.reduceRight((total, value) => total + value); // Reduces the array from right to left
console.log(sum4); // Outputs: 15

let arr15 = [12, 11, 17, 19, 21];
let allover12 = arr15.every(x => x > 12); // Checks if all elements are greater than 12
console.log(allover12); // Outputs: false

let someover12 = arr15.some(x => x > 12); // Checks if some elements are greater than 12
console.log(someover12); // Outputs: true

let str="Hello World";
let strArr = Array.from(str); // Converts string to array
console.log(strArr); // Outputs: ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']
let strArr2 = Array.from(str, x => x.toUpperCase()); // Converts string to array and changes each character to uppercase
console.log(strArr2); // Outputs: ['H', 'E', 'L', 'L', 'O', ' ', 'W', 'O', 'R', 'L', 'D']

let arr16 = [1, 2, 3, 4, 5];
let keys = arr16.keys(); // Returns an iterator for the keys of the array
for(let key of keys) {
    console.log(key); // Outputs: 0, 1, 2, 3, 4
}

let entriedArr = arr16.entries(); // Returns an iterator for the entries of the array
for(let entry of entriedArr) {
    console.log(entry); // Outputs: [0, 1], [1, 2], [2, 3], [3, 4], [4, 5]
}

let updatedArr16 = arr16.with(2, 10); // Creates a new array with the element at index 2 replaced by 10
console.log(updatedArr16); // Outputs: [1, 2, 10, 4, 5]
console.log(arr16); // Original array remains unchanged


let arr17 = [...arr16, ...updatedArr16]; // Combines arr16 and updatedArr16
console.log(arr17); // Outputs: [1, 2, 3, 4, 5, 1, 2, 10, 4, 5]
=======
// Array Methods Example
let arr = [1, 4, 3, 5, 2, 6];
console.log(arr.length);

let arr2 = arr.toString();
console.log(arr);
console.log(arr2);
console.log(arr2.length);

console.log(arr.at(4));
console.log(arr[4]); // Both will output the same value

let arr3 = [9, 10, 8, 4, 11, 7];
let arr4 = arr.concat(arr3); // Concatenates arr and arr3
console.log(arr4);

console.log(arr.join(" - "));

let num = arr.pop();
console.log(num); //removed element

arr.push(100);
let num2 = arr.push(100);
console.log(num2); //length of the array after push

let shftval = arr.shift(); //removes first element
console.log(shftval); //removed element
console.log(arr); // Array after shift

let unshftval = arr.unshift(200); //adds element at the beginning
console.log(unshftval); //length of the array after unshift
console.log(arr); // Array after unshift

let arr5 = arr.concat(500);
console.log(arr5); // Concatenates 500 to arr

arr.copyWithin(2, 0);
console.log(arr); // Array after copyWithin

let ar = [[1, 3], [2, 4], [5, 6], [8, 9]];
let flatArr = ar.flat(); // Flattens the nested array
console.log(flatArr);

let newArr = arr.flatMap(x => [x, x * 2]);
console.log(newArr);

let sp = [1, 2, 3, 4, 5];
let spliced = sp.splice(1, 3, 10, 20); // Removes 3 elements starting from index 1 and adds 10, 20
console.log(spliced); // Elements removed
console.log(sp);


let tosp = [1, 2, 3, 4, 5];
let toSpliced = tosp.toSpliced(1, 3, 10, 20); // Creates a new array with elements replaced
console.log(toSpliced); // New array after toSpliced
console.log(tosp); // Original array remains unchanged


let sl = [1, 2, 3, 4, 5];
let sliced = sl.slice(3); // Slices the array from index 3 to the end
let sliced2 = sl.slice(1, 3); // Slices the array from index 1 to index 3 (exclusive)
console.log(sliced); // Sliced array from index 3
console.log(sliced2); // Sliced array from index 1 to 3
console.log(sl); // Original array remains unchanged



// Array Search Example
let arr6 = [1, 2, 3, 4, 5, 6, 5, 7, 8, 9];
let index = arr6.indexOf(5); // Finds the index of 5
let index2 = arr6.indexOf(5, 6); // Finds the index of 5 starting from index 6
console.log(index2); // Outputs: -1 
console.log(index); // Outputs: 4 // First occurrence of 5
let lastIndex = arr6.lastIndexOf(5); // Finds the last index of 5
console.log(lastIndex); // Outputs: 6 // Last occurrence of 5
let includesVal = arr6.includes(5); // Checks if 5 is in the array
console.log(includesVal); // Outputs: true
let findval = arr6.find(x => x > 5); // Finds the first element greater than 5
console.log(findval); // Outputs: 6
let findIndexVal = arr6.findIndex(x => x > 5); // Finds the index of the first element greater than 5
console.log(findIndexVal); // Outputs: 5
let findLastVal = arr6.findLast(x => x > 5); // Finds the last element greater than 5
console.log(findLastVal); // Outputs: 9
let findLastIndexVal = arr6.findLastIndex(x => x > 5); // Finds the index of the last element greater than 5
console.log(findLastIndexVal); // Outputs: 9


// Array Sort Example(Alphabetically)
let arr7 = [1, 4, 13, 15, 2, 6];
let sortedArr = arr7.sort(); // Sorts the array in ascending order
console.log(sortedArr); // Outputs: [1, 2, 3, 4, 5, 6]

let arr8 = [2, 13, 1, 17, 4, 9, 8];
arr8.reverse(); // Reverses the array
console.log(arr8); // Outputs: [8, 9, 4, 7, 1, 3, 2]

let arr9 = [5, 13, 6, 1, 4, 2, 19, 7];
let sortedArr3 = arr9.toSorted(); // Creates a new sorted array
console.log(sortedArr3); // Outputs: [1, 2, 3, 4, 5, 6, 7, 9]
console.log(arr9); // Original array remains unchanged;
let toreversedArr = arr9.toReversed(); // Creates a new reversed array
console.log(toreversedArr); // Outputs: [7, 9, 2, 4, 1, 6, 3, 5]
console.log(arr9); // Original array remains unchanged


// Numeric Sort Example
let numArr = [1, 4, 13, 5, 2, 16];
let numSortedArr = numArr.sort((a, b) => a - b); // Sorts the array in ascending order numerically
console.log(numSortedArr); // Outputs: [1, 2, 4, 5, 13, 16]
let numSortedArr2 = numArr.sort((a, b) => b - a); // Sorts the array in descending order numerically
console.log(numSortedArr2); // Outputs: [16, 13, 5, 4, 2, 1]


// Array Min and Max Example
let arr10 = [1, 4, 13, 5, 16, 2];
let minVal = Math.min.apply(null, arr10); // Finds the minimum value in the array
let maxVal = Math.max(...arr10); // Finds the maximum value in the array
console.log(minVal); // Outputs: 1
console.log(maxVal); // Outputs: 16


const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];
let sortedCars = cars.sort((a, b) => a.year - b.year); // Sorts the array of objects by year
console.log(sortedCars);



// Array Iteration Example
let arr11 = [1, 2, 3, 4, 5];
arr11.forEach(func);
function func(value, index, array) {
    console.log(`Value: ${value}, Index: ${index}, Array: ${array}`);
}

let arr12 = arr11.map(func2);
function func2(value, index, array) {
    return value * 2; // Returns a new array with each element multiplied by 2
}
let arr13 = arr11.map(x => x * 2); // Using arrow function for the same operation
console.log(arr12); // Outputs: [2, 4, 6, 8, 10]
console.log(arr13); // Outputs: [2, 4, 6, 8, 10]

let arr14 = arr11.flatMap((x) => x * 2);
console.log(arr14); // Outputs: [2, 4, 6, 8, 10]

let over3 = arr11.filter(x => x > 3); // Filters the array to get elements greater than 3
console.log(over3); // Outputs: [4, 5]

let sum = arr11.reduce(func3);
function func3(total, value, index, array) {
    return total + value; // Sums up all elements in the array
}
console.log(sum);

let sum2 = arr11.reduce((total, value) => total + value); // Using arrow function for the same operation
console.log(sum2); // Outputs: 15

let sum3 = arr11.reduce((total, value) => total + value, 10); // Starts with an initial value of 10
console.log(sum3); // Outputs: 25


let sum4 = arr11.reduceRight((total, value) => total + value); // Reduces the array from right to left
console.log(sum4); // Outputs: 15

let arr15 = [12, 11, 17, 19, 21];
let allover12 = arr15.every(x => x > 12); // Checks if all elements are greater than 12
console.log(allover12); // Outputs: false

let someover12 = arr15.some(x => x > 12); // Checks if some elements are greater than 12
console.log(someover12); // Outputs: true

let str="Hello World";
let strArr = Array.from(str); // Converts string to array
console.log(strArr); // Outputs: ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']
let strArr2 = Array.from(str, x => x.toUpperCase()); // Converts string to array and changes each character to uppercase
console.log(strArr2); // Outputs: ['H', 'E', 'L', 'L', 'O', ' ', 'W', 'O', 'R', 'L', 'D']

let arr16 = [1, 2, 3, 4, 5];
let keys = arr16.keys(); // Returns an iterator for the keys of the array
for(let key of keys) {
    console.log(key); // Outputs: 0, 1, 2, 3, 4
}

let entriedArr = arr16.entries(); // Returns an iterator for the entries of the array
for(let entry of entriedArr) {
    console.log(entry); // Outputs: [0, 1], [1, 2], [2, 3], [3, 4], [4, 5]
}

let updatedArr16 = arr16.with(2, 10); // Creates a new array with the element at index 2 replaced by 10
console.log(updatedArr16); // Outputs: [1, 2, 10, 4, 5]
console.log(arr16); // Original array remains unchanged


let arr17 = [...arr16, ...updatedArr16]; // Combines arr16 and updatedArr16
console.log(arr17); // Outputs: [1, 2, 3, 4, 5, 1, 2, 10, 4, 5]
>>>>>>> 3524336f4fc438d258e03d83c60f975546cf41bd
