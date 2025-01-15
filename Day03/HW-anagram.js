function checkForAnagram(string1,string2){

    if (string1.length !== string2.length) {
        return'Given strings are no anagram';
    }

    let newStr1 = string1.split("").sort().join().toLowerCase();
    let newStr2 = string2.split("").sort().join().toLowerCase();

    console.log(newStr1);
    console.log(newStr2);

    if (newStr1===newStr2){
        console.log('Given strings are anagram');        
    }else {
        console.log('Given strings are not anagram');
    }    
    
}

checkForAnagram("listen","silent");
checkForAnagram("hello","world");
checkForAnagram("silent","listens");