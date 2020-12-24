'use strict';
alert('Enter 3 numbers (a, b, c) for triangle sides lengt');
let a = parseFloat(prompt('Enter side a for triangle','1'));
let b = parseFloat(prompt('Enter side b for triangle','1'));
let c = parseFloat(prompt('Enter side c for triangle','1'));
if(isNaN(a)||isNaN(b)||isNaN(c)){
       alert('Input values should be ONLY numbers');
       console.log('Input values should be ONLY numbers');
} else if(a+b<=c||a+c<=b||b+c<=a){
  alert('Triangle doesn’t exist');
  console.log('Triangle doesn’t exist');
 } else if (a===b&&a===c&&b===c) {
      alert('Equilateral triangle');
      console.log('Equilateral triangle');
 } else if(a===b||a===c||b===c) {
     alert('Isosceles triangle');
     console.log('Isosceles triangle');
 } else {
       alert('Scalene triangle');
       console.log('Scalene triangle');
 }
