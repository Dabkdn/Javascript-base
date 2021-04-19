function f1() {
    return this;
}

// In a browser:
//   f1() === window; // true

// In Node:
console.log(f1() === global); // true

function f2() {
    'use strict'; // see strict mode
    return this;
}

console.log(f2()); // undefined