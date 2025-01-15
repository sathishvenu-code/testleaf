let name1 = 'Sujith';
let name2 = 'Sujith';
let name = new String('Sujith');

console.log(name1===name2);
console.log(name1===name);

console.log(typeof name);
console.log(typeof name1);

// Escape sequence in string is '\'. To avoid escape sequence we can use double quotes or eveb backticks

console.log('Name of the batter is Daniel O\'Brian');
console.log("Name of the batter is Daniel O'Brian");
console.log(`Name of the batter is Daniel O'Brian`);

let dept = "Mechanical";
let collegeName = "BIST";

console.log("I studied in "+collegeName+", and stream is "+dept);
console.log(`I studied in ${collegeName}, and stream is ${dept}`);

// count of characters in a string. length always starts from 1

console.log(`no of characters in dept is ${dept.length}`);

// index always starts from 0

console.log(`fifth character in department is ${dept.charAt(4)}`);

// indexOf is going to provide us the index of a specific letter that we are looking for
console.log(`index of i in dept is ${dept.indexOf('i')}`);
console.log(`index of i in dept is ${dept.indexOf('t')}`); // if we try to find a character which is not present in the string it will return -1
console.log(`index of i in dept is ${dept.indexOf('a')}`); // will return the first match if have more than one matches

// includes is going to check if the substring is part of main string

let playerName = 'MarkWood';
console.log(playerName.includes("Wood"));
console.log(playerName.toLowerCase()); // converts to lower case
console.log(playerName.toUpperCase()); // converts to upper case

console.log(dept.toLocaleLowerCase());
console.log(dept.toLocaleUpperCase());

//split splits the input param to any of the required split method
let inString = "Hi There my name is sathish kumar venu";
console.log(inString.split(" "));


// slice if we want to extract a portion from the string or sentence
let welcomeMessage = "welcome to playwright and happy learning";
console.log(welcomeMessage.slice(0,15));

let age = [1,2,3,4,5,6,7,8,9];// slice can also be used to get a new array from existing array
console.log(age.slice(3,7));
//console.log(age.slice(7,3));

// substring is to get the portion of actual input similar to slice but sugstrings cannot be used for arrays
console.log(welcomeMessage.substring(15,0));
console.log(welcomeMessage.substring(0,15));













