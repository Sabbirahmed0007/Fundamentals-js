// Fundamentals of JavaScript you need to know 

// Data types
/**
 * 1, Primitive
 *      * Number(Integer, Float)
 *      * Character(char)
 *      * Boolean (bool)(true, false)
 * 
 * 2, Non-primitivie
 *      * String
 *      * Array
 *      * Object
 *      * Null 
 *      * Undefined
 */

// Variable naming convention 
/**
 *  Must be starting with word(small handed recommended)
 *  Shouldn't be starting with Number
 *  Hiphen is not allowed (prohibited)
 *  the variable name should be camelcase (Recommended)
 */


var x = 23.3443;
var y = '23.4352';
const e = true;
// console.log(parseInt(x));
// console.log(y, typeof y, Number(y).toFixed(1), typeof parseInt(y), typeof e, e);



// Pre increament / Post increament

var x = 9;

// console.log(x++);
// console.log(x++); //(post increment)
// console.log(++x); //(pre increment)
// console.log(++x);

// ---------------------------------------------------
// Array

var arr = [23, 45, 42, 56];
console.log(arr.length);
console.log("Length of the array" ,arr);
console.log(arr[2]); //Index of 2nd element of the array



// Add or Remove element in to an array

var friends = ['Sakib', 'Rashed', 'Mamun', 'Apu'];
// console.log(friends);

friends.push('Kabir');  // Has been added at the last/end
// console.log(friends);

friends.unshift('Murshed'); //Has been added at the start/initial
// console.log(friends);

friends.pop() // will be removed from the end
// console.log(friends);

friends.shift() // will be removed from the commence
// console.log(friends);

var remainedFriends = friends.slice(1, 3); 
// console.log(remainedFriends);

friends.splice(1, 2); // handy to remove certain elements
// console.log(friends);


// --------------------------------------
// If Else Statement
//---------------------------------------

//  Am I adult?

var age = 25;

if (age>=18) {
    console.log(' Yes, I am Adult');
} else {
    console.log('No, I am not Adult');
}


//  Did I pass or Fail?

var marks = 30;

if (marks>= 80) {
    console.log('You Got A+');
} 
else if(marks>=70){
    console.log('You got A');
}
else if(marks>=60 ){
    console.log('You got A-');
}
else if(marks>=50 ){
    console.log('You got B');
}
else if(marks>=33 ){
    console.log('You got C');
}
else {
    console.log('You are Fail');
}
// if (marks>= 80) {
//     console.log('You Got A+');
// } 
// else if(marks>=70 && marks<79){
//     console.log('You got A');
// }
// else if(marks>=60 && marks<69){
//     console.log('You got A-');
// }
// else if(marks>=50 && marks<59){
//     console.log('You got B');
// }
// else if(marks>=33 && marks<49){
//     console.log('You got C');
// }
// else {
//     console.log('You are Fail');
// }


// -------------------------------------
// Nested if Else Statement
//--------------------------------------


var temperature = 23 ;
var isRaining = true;

if (temperature > 30) {
    console.log('It is a hot sunny day.');
    if(isRaining === true){
        console.log('But It is raining.');
    }
    else{
        console.log('And It is not raining.');
    }
}
else {
    console.log('It is a cold day.');
    if (isRaining) {
        console.log("And It's raining.");
    } else {
        console.log('But It  is not raining.');
    }
}


















