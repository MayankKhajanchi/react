console.log("utils.js is running");

export const square = (x) => x * x;
export const add = (a,b) => a+b;
//const subtract = (a,b) => a-b; // to use it as a default export we write 
// export default subtract
// or
export default (a,b) => a-b;

//export {add, subtract as default }; // named export  //we can expoert it like this (or) we can write export in front of the const
//to use the deafult export subtract, we use import as 
// import subtract ,{ square, add }
// i.e writing the default export before the curly braces


// two types of exports
// default export
// named export

////--this is how we import--////


//import thisIsTheDefault,{ square,add } from './import_and_export';   // in case of default export,
// here it is subtract,
// we can write anything


////--this goes in app.js--////
//import './utils.js';
/*
import thisIsTheDefault,{ square,add } from './import_and_export';   // in case of default export,
// here it is subtract,
// we can write anything

import isSenior,{isAdult,canDrink} from './person.js';

console.log("newapp.js is runnin");

console.log(square(4));
console.log(add(5,64));
console.log(thisIsTheDefault(100,21));
console.log(isSenior(80));
console.log(isAdult(19));
console.log(canDrink(20));
*/