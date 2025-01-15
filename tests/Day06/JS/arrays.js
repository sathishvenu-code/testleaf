let browserActions = ['login', 'navigate'];

browserActions.push('browser','extractvalue'); // adds new value to the end of the existing array
console.log(browserActions);

browserActions.pop(); // removes last value from the array
console.log(browserActions);

browserActions.shift(); // removes first element from the array
console.log(browserActions);

browserActions.unshift('login','validate'); // adds new value to the beginning of the existing array
console.log(browserActions);

browserActions.forEach(element => {
    console.log(element);    
});

let numbers = [1,2,3,4,5,6];

let doubledNumbers = numbers.map(num => num*2)
console.log(doubledNumbers);

let evenNumbers = numbers.filter(num => num%2===0);
console.log(evenNumbers);

let oddNumbers = numbers.filter(num => num%2===1);
console.log(oddNumbers);

let products = ['red', 'blue', 'green', 'yellow'];
products.splice(1,2,'black'); // splice is meant to modify the existing array here 1 is starting position from where we need to make change 2 is no of elements to be removed last value is the new element to be added
console.log(products);

// to get length of the array
console.log('total no of products in list is ' + products.length);

products[4] = 'purple';
products[8] = 'indigo';

console.log(products);
console.log('total no of products in list is ' + products.length);

let schools =[];
console.log(schools.length);

console.log(products.join('*')); // using this we can like convert an array into a string

let newNumberList = evenNumbers.concat(oddNumbers);

console.log(newNumberList); // concatinate used to merge two arrays

console.log(newNumberList.sort());
















