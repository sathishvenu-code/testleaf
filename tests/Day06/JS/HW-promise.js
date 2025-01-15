let conditionalPromise = new Promise ((resolve, reject) =>{

    let randomNumber = Math.random();

    if (randomNumber>0.5) {

        resolve(`Promise is resolved generated number is ${randomNumber} `);
        
    } else {
        
        reject(`Promise is rejected generated number is ${randomNumber}`);

    }

})

conditionalPromise
    .then(fulfilled =>{
        console.log(fulfilled);        
    })

        .catch(reason =>{
            console.log(reason);     
        })          
        