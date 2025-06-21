<<<<<<< HEAD
// String Methods in JavaScript
let text = "Hello, World!";
console.log(text.length);
console.log(text.charAt(2)); // index 2 character
console.log(text.at(2)); // index 2 character
console.log(text[2]); // index 2 character
console.log(text.charCodeAt(0)); // ASCII code of the 0th indexed character
console.log(text.charAt(text.length - 2)); // index length-2 character
console.log(text.at(-2)); // index length-2 character

let textPart = text.slice(0, 8); // slice from index 0 to 8(exclusive)
console.log(textPart); // "Hello, w"
let textPart2 = text.slice(-5); // slice from index -5 to the end
console.log(textPart2); // "orld!"
let textPart3 = text.slice(-5, -1); // slice from index -5 to -1(exclusive)
console.log(textPart3); // "orld"

let textPart4 = text.substring(1, 8); // substring from index 1 to 8(exclusive)
console.log(textPart4); // "ello, w"
let textPart5 = text.substring(8, 1); // substring from index 8 to 1 (swapped)
console.log(textPart5); // "ello, w" (swapped indices are treated as if they were in order)

let uppercasetext = text.toUpperCase(); // convert to uppercase
console.log(uppercasetext);
let lowercasetext = text.toLowerCase(); // convert to lowercase
console.log(lowercasetext);

let a="Hello";
let b="World";
let c = a.concat(" ", b); // concatenate strings
console.log(c); // "Hello World"
let d = a + " " + b; // another way to concatenate strings
console.log(d); // "Hello World"
let e = `${a} ${b}`; // template literal for concatenation
console.log(e); // "Hello World"


let textWithSpaces = "   Hello, World!   ";
let trimmedText = textWithSpaces.trim(); // remove leading and trailing spaces
console.log(trimmedText); // "Hello, World!"
let textWithSpaces2 = "   Hello, World!   ";
let trimmedText2 = textWithSpaces2.trimStart(); // remove leading spaces
console.log(trimmedText2); // "Hello, World!   "
let textWithSpaces3 = "   Hello, World!   ";
let trimmedText3 = textWithSpaces3.trimEnd(); // remove trailing spaces
console.log(trimmedText3); // "   Hello, World!"


let pad = "hi!";
let paddedText = pad.padStart(10, " "); // pad with spaces to the start
console.log(paddedText); // "       hi!"
let paddedText2=pad.padEnd(10, " "); // pad with spaces to the end
console.log(paddedText2); // "hi!       "


let repeatedText = text.repeat(2); // repeat the string 2 times
console.log(repeatedText); // "Hello, World!Hello, World!"


let replacedText = repeatedText.replace("World", "JavaScript"); // replace "World" with "JavaScript"
console.log(replacedText); // "Hello, JavaScript!Hello, JavaScript!"
let replacedText2 = repeatedText.replace(/world/i, "JavaScript"); // replace "world" with "JavaScript" (case-insensitive)
console.log(replacedText2); // "Hello, JavaScript!Hello, JavaScript!"
let replacedText3 = repeatedText.replace(/World/g, "JavaScript"); // replace all occurrences of "world" with "JavaScript"
console.log(replacedText3); // "Hello, JavaScript!Hello, JavaScript!" (no change since "World" is not matched)
let replacedText4 = repeatedText.replaceAll("World", "JavaScript"); // replace all occurrences of "World" with "JavaScript"
console.log(replacedText4); // "Hello, JavaScript!Hello, JavaScript!"


let str = "aljsklfklj";
let splitArray = str.split(","); // split the string by comma
console.log(splitArray); // ["aljsklfklj"] (no comma, so the whole string is returned as a single element array)

let splitArray2 = str.split(""); // split the string into characters
console.log(splitArray2); // ["a", "l", "j", "s", "k", "l", "f", "k", "l", "j"] (each character is an element in the array)


// String search methods
let searchText = "Hello, World!";
console.log(searchText.indexOf("World")); // find the index of "World" (returns 7)
console.log(searchText.indexOf("world")); // find the index of "world" (returns -1, case-sensitive)
console.log(searchText.indexOf("l")); // find the index of "l" (returns 2, first occurrence)
console.log(searchText.lastIndexOf("l")); // find the last index of "l" (returns 10, last occurrence)
console.log(searchText.indexOf("l", 4)); // find the index of "l" starting from index 4 (returns 10, first occurrence after index 4)


console.log(searchText.search("l")); // find the index of "l" (returns 2, first occurrence)
console.log(searchText.search(/l/)); // find the index of "l" using regex (returns 2, first occurrence)

let searchText2 = "Hello, World! Hello, World!";
console.log(searchText2.match("or")); 
console.log(searchText2.match(/or/));
console.log(searchText2.match(/or/g));
console.log(searchText2.match(/OR/gi));


let iterator = searchText2.matchAll("or") // returns an iterator of all matches
for (const match of iterator) {
    console.log(match); // logs each match object
}

let iterator2 = searchText2.matchAll(/or/g); // returns an iterator of all matches using regex
for (const match of iterator2) {
    console.log(match); // logs each match object
}

let iterator3 = searchText2.matchAll(/Or/gi); // returns an iterator of all matches using regex (case-insensitive)
for (const match of iterator3) {
    console.log(match); // logs each match object
}


console.log(searchText2.includes("World")); // check if "World" is included (returns true)
console.log(searchText2.includes("world")); // check if "world" is included (returns false, case-sensitive)
console.log(searchText2.includes("World", 22)); // check if "World" is included starting from index 22 (returns false)


console.log(searchText2.startsWith("Hello")); // check if it starts with "Hello" (returns true)
console.log(searchText2.startsWith("World",7)); // check if it starts with "World" at index 7 (returns true)
console.log(searchText2.endsWith("World!")); // check if it ends with "World!" (returns true)
console.log(searchText2.endsWith("World", 12)); // check if it ends with "World" at index 12 (returns true)
=======
// String Methods in JavaScript
let text = "Hello, World!";
console.log(text.length);
console.log(text.charAt(2)); // index 2 character
console.log(text.at(2)); // index 2 character
console.log(text[2]); // index 2 character
console.log(text.charCodeAt(0)); // ASCII code of the 0th indexed character
console.log(text.charAt(text.length - 2)); // index length-2 character
console.log(text.at(-2)); // index length-2 character

let textPart = text.slice(0, 8); // slice from index 0 to 8(exclusive)
console.log(textPart); // "Hello, w"
let textPart2 = text.slice(-5); // slice from index -5 to the end
console.log(textPart2); // "orld!"
let textPart3 = text.slice(-5, -1); // slice from index -5 to -1(exclusive)
console.log(textPart3); // "orld"

let textPart4 = text.substring(1, 8); // substring from index 1 to 8(exclusive)
console.log(textPart4); // "ello, w"
let textPart5 = text.substring(8, 1); // substring from index 8 to 1 (swapped)
console.log(textPart5); // "ello, w" (swapped indices are treated as if they were in order)

let uppercasetext = text.toUpperCase(); // convert to uppercase
console.log(uppercasetext);
let lowercasetext = text.toLowerCase(); // convert to lowercase
console.log(lowercasetext);

let a="Hello";
let b="World";
let c = a.concat(" ", b); // concatenate strings
console.log(c); // "Hello World"
let d = a + " " + b; // another way to concatenate strings
console.log(d); // "Hello World"
let e = `${a} ${b}`; // template literal for concatenation
console.log(e); // "Hello World"


let textWithSpaces = "   Hello, World!   ";
let trimmedText = textWithSpaces.trim(); // remove leading and trailing spaces
console.log(trimmedText); // "Hello, World!"
let textWithSpaces2 = "   Hello, World!   ";
let trimmedText2 = textWithSpaces2.trimStart(); // remove leading spaces
console.log(trimmedText2); // "Hello, World!   "
let textWithSpaces3 = "   Hello, World!   ";
let trimmedText3 = textWithSpaces3.trimEnd(); // remove trailing spaces
console.log(trimmedText3); // "   Hello, World!"


let pad = "hi!";
let paddedText = pad.padStart(10, " "); // pad with spaces to the start
console.log(paddedText); // "       hi!"
let paddedText2=pad.padEnd(10, " "); // pad with spaces to the end
console.log(paddedText2); // "hi!       "


let repeatedText = text.repeat(2); // repeat the string 2 times
console.log(repeatedText); // "Hello, World!Hello, World!"


let replacedText = repeatedText.replace("World", "JavaScript"); // replace "World" with "JavaScript"
console.log(replacedText); // "Hello, JavaScript!Hello, JavaScript!"
let replacedText2 = repeatedText.replace(/world/i, "JavaScript"); // replace "world" with "JavaScript" (case-insensitive)
console.log(replacedText2); // "Hello, JavaScript!Hello, JavaScript!"
let replacedText3 = repeatedText.replace(/World/g, "JavaScript"); // replace all occurrences of "world" with "JavaScript"
console.log(replacedText3); // "Hello, JavaScript!Hello, JavaScript!" (no change since "World" is not matched)
let replacedText4 = repeatedText.replaceAll("World", "JavaScript"); // replace all occurrences of "World" with "JavaScript"
console.log(replacedText4); // "Hello, JavaScript!Hello, JavaScript!"


let str = "aljsklfklj";
let splitArray = str.split(","); // split the string by comma
console.log(splitArray); // ["aljsklfklj"] (no comma, so the whole string is returned as a single element array)

let splitArray2 = str.split(""); // split the string into characters
console.log(splitArray2); // ["a", "l", "j", "s", "k", "l", "f", "k", "l", "j"] (each character is an element in the array)


// String search methods
let searchText = "Hello, World!";
console.log(searchText.indexOf("World")); // find the index of "World" (returns 7)
console.log(searchText.indexOf("world")); // find the index of "world" (returns -1, case-sensitive)
console.log(searchText.indexOf("l")); // find the index of "l" (returns 2, first occurrence)
console.log(searchText.lastIndexOf("l")); // find the last index of "l" (returns 10, last occurrence)
console.log(searchText.indexOf("l", 4)); // find the index of "l" starting from index 4 (returns 10, first occurrence after index 4)


console.log(searchText.search("l")); // find the index of "l" (returns 2, first occurrence)
console.log(searchText.search(/l/)); // find the index of "l" using regex (returns 2, first occurrence)

let searchText2 = "Hello, World! Hello, World!";
console.log(searchText2.match("or")); 
console.log(searchText2.match(/or/));
console.log(searchText2.match(/or/g));
console.log(searchText2.match(/OR/gi));


let iterator = searchText2.matchAll("or") // returns an iterator of all matches
for (const match of iterator) {
    console.log(match); // logs each match object
}

let iterator2 = searchText2.matchAll(/or/g); // returns an iterator of all matches using regex
for (const match of iterator2) {
    console.log(match); // logs each match object
}

let iterator3 = searchText2.matchAll(/Or/gi); // returns an iterator of all matches using regex (case-insensitive)
for (const match of iterator3) {
    console.log(match); // logs each match object
}


console.log(searchText2.includes("World")); // check if "World" is included (returns true)
console.log(searchText2.includes("world")); // check if "world" is included (returns false, case-sensitive)
console.log(searchText2.includes("World", 22)); // check if "World" is included starting from index 22 (returns false)


console.log(searchText2.startsWith("Hello")); // check if it starts with "Hello" (returns true)
console.log(searchText2.startsWith("World",7)); // check if it starts with "World" at index 7 (returns true)
console.log(searchText2.endsWith("World!")); // check if it ends with "World!" (returns true)
console.log(searchText2.endsWith("World", 12)); // check if it ends with "World" at index 12 (returns true)
>>>>>>> 3524336f4fc438d258e03d83c60f975546cf41bd
