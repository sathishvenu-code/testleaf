function printOddNumbers() {

    for (let index = 0; index <= 25; index++) {
        let rem = index%2;
        if (rem !== 0) {
            console.log(`Its a odd number and number is ${index}`);
        }    
    }
    
}

printOddNumbers();