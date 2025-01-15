var gender = 'female';

function printGender() {

    let age = 40;

    if(gender.startsWith('female')) {
        let sport = 'cricket';
        console.log("Name of the sport is " + sport);
        console.log("It is She");
    }else {
        console.log("It is He");
    }

    //console.log("Name of the sport is " + sport);

    console.log("Age of the person is " + age);
    
}

//console.log("Age of the person outside the method is " + age);
//console.log("Name of the sport is " + sport);

printGender();