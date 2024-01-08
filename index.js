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
    if (isRaining === true) {
        console.log("And It's raining.");
    } else {
        console.log('But It  is not raining.');
    }
}


// ----------------------------------------
// Loop
// ----------------------------------------

// For Loop
//-------------------
var stm = 'I am Sorry bro';

for(var i = 0; i<=100; i++){
    // console.log(stm, i);
}

// While Loop
//----------------------

var i = 0;
while(i <=10){

    // console.log(stm, i);
    i++;
}

//Break and continue

var arr = [10, 20, 30, 40, 50, 30, 40, 50, 60];

// console.log(arr.indexOf(40));

// console.log(arr.indexOf(100)); // If the element is not available in the array then it will show "-1" as result


// for (var i = 0; i< arr.length; i++){
//     console.log(arr[i]);
    
// }

// break

for (var i = 0; i< arr.length; i++){
    // console.log(arr[i]);
    if(arr[i]=== 30){
        break;
    }
    // console.log(arr[i]);
    
}

/// continue
for (var i = 0; i< arr.length; i++){
    // console.log(arr[i]);
    if(arr[i]=== 30){
        continue;
    }
    // console.log(arr[i]);
    
}


// var x = 0;

// while(x < arr.length){
//     console.log(arr[x]);
//     x++;
// }


// ---------------------------------------
// Comparision operator
//---------------------------------------

//Type validation
var x = 5;
if(x === 5){
    console.log('Equal to 5');
}
else{
    console.log('Not equal to 5.');
}


// Multiple condition
// var raining = true;
// var umbrella = false;

if(raining == true && umbrella== true){
    console.log('I will go out.');
}
else{
    console.log('I will not go out');
}

var raining = true;
var umbrella = false;

if(raining == false || umbrella == true){
    console.log('I will go out.');
}
else if(raining == true && umbrella== true){
    console.log('I will go out');
}
else{
    console.log('I will not go out');
}


