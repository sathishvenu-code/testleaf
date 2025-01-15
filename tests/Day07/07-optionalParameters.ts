/**
 * Mandatory fields
 * firstname
 * email
 * nationality
 * age
 * sex
 * date of birth
 * 
 * Optional parameters
 * secondary address
 * landline
 * height
 * 
 * Default parameters  should have ? while declaring and we need to declare the optional parameters only after the mandatory params are declared
 * 
 */

function checkParams(fname:string, lname:string, email:string, age?:number, dob?:string) {

    console.log(`the params passed are ${fname}, ${lname}, ${email}, ${age}`);    
    
}

checkParams('sathish','venu','abc@mail.com',40);

function profile(fname:string, lname:string, email:string, age?:number, status : string = 'Available') {

    console.log(`the params passed are ${fname}, ${lname}, ${email}, ${age}, ${status}`);    
    
}

profile('sathish','venu','abc@mail.com',40);
profile('Suji','sathish','abc@mail.com',37,'Busy');