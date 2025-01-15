import { log } from "console"


let userDetails : {
    firstName : string,
    lastName : string,
    id : number,
    isActive : boolean
} = {

    firstName : 'suji',
    lastName : 'sathish',
    id : 45,
    isActive : true
}

console.log(userDetails.firstName);
console.log(userDetails['id']);
