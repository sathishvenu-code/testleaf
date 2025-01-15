// apart from data types in JS we have any and never here

let age:number = 30;
console.log(age);

let firstName:string = 'Sathish';
let isDone:boolean ; true;

let numArray: number[] = [1,2,3,4];  // in ts we have to declare a array along with the type of data it is going to accept
let strArry: string[] = ['deekshi', 'titu','sathish'];

// here the array are homogenous unlike in JS which is hetrogenous in nature
// we have something called tuple which accepts different type of datatypes but of fixed length

//Tuple - fixed length of the array
let tuple:[string, number] 
let user:[string, boolean] = ["Testleaf", true]