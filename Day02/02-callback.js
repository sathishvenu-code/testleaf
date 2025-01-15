

function processUserInput(callback){
    let name = prompt('Plese Enter Your Name');
    callback(name);

}

function displayName(name){
    alert(`Hello ${name}`);
}

processUserInput(displayName);