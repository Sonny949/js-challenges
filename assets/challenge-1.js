//Use ES6 whenever possible.

/*
CHALLENGE 1
Create a function sum() that will sum all arguments passed to it.
Quantity of the arguments is unknown.
Use console.log() at the end of the sum() function to print result.
*/

"use strict";

// Write code here
function sum(...args) {
    let sum = 0
    for (let i = 0; i < args.length; i++) {
        sum += args[i]
    }
    console.log(sum)
}


sum(1, 3);
//4

sum(10, 20, 5);
//35

sum(2, 5, 80, 1, 10, 12);
//110
