
for (let index = 1; index <= 10; index++) {
    console.log(index);    
}


let i = 0;  
while (i <=5) {      
    console.log(i);  
    i++;    
}

let isValid = false;
while (!isValid) {
    let userInput = prompt('Enter the number greater than 10');
    if (userInput >10){
        isValid = true;
    }
    
}

// let continueloop = true;

// while(continueloop){
//     console.log('Continue Programming');
// }

let j=5;
do {
    console.log("Print atleast once");    
} while (j>5);