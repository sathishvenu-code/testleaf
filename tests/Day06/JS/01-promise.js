let myPromise = new Promise((resolve, reject)=>{
    let success = true;   // This will let us know if food is ready or now

    if (success) {
        resolve ("Your food is ready");
    } else {
        reject ("Your food is not ready");
    }
})

myPromise
    .then(fulfilled => {
        console.log(fulfilled);        
    })
        .catch(reason =>{
            console.log(reason);            
        })
