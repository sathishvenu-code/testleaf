let firstPromise = new Promise((resolve, reject) =>{

if (true) {
    resolve('Promise resolved');
} else {
    reject('Promise rejected');    
}
})

firstPromise    
    .then (fulfilled =>{
        console.log(fulfilled);
    })
    .catch(rejected =>{
        console.log(rejected);
    })