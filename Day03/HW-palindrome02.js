let inputString = 'friendship';

function checkPalindrome(stringToCheck) {

    let eachChar;
    let reverseString = "";

    let splitInput = stringToCheck.split("");

    for (let index = splitInput.length-1; index >=0; index--) {
        eachChar = splitInput[index];
        reverseString = reverseString+eachChar;        
    }

    console.log(`Reversed string is ${reverseString}`);
    if (stringToCheck===reverseString) {
        console.log('Given string is a Palindrome')        
    }else {
        console.log('Given string is not a Palindrome')       
    }
}

checkPalindrome(inputString);