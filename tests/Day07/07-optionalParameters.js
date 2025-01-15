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
function checkParams(fname, lname, email, age, dob) {
    console.log("the params passed are ".concat(fname, ", ").concat(lname, ", ").concat(email, ", ").concat(age));
}
checkParams('sathish', 'venu', 'abc@mail.com', 40);
function profile(fname, lname, email, age, status) {
    if (status === void 0) { status = 'Available'; }
    console.log("the params passed are ".concat(fname, ", ").concat(lname, ", ").concat(email, ", ").concat(age, ", ").concat(status));
}
profile('sathish', 'venu', 'abc@mail.com', 40);
profile('Suji', 'sathish', 'abc@mail.com', 37, 'Busy');
