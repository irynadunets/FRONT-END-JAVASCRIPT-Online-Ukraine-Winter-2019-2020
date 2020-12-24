  'use strict';
  alert('Enter 3 values (a, b, c) for quadratic equation (ax2 + bx + c = 0)');
  let a = parseFloat(prompt('Enter a for quadratic equation (ax2 + bx + c = 0)','1'));
  let b = parseFloat(prompt('Enter b for quadratic equation (ax2 + bx + c = 0)','1'));
  let c = parseFloat(prompt('Enter c for quadratic equation (ax2 + bx + c = 0)','1'));
  if(isNaN(a)||isNaN(b)||isNaN(c)){
         alert('Invalid input data');
         console.log('Invalid input data');
  } else {
        let s=2;
        let q=4;
        let d=Math.pow(b, s)-q*a*c;
        if (d<0) {
           alert('no solution (Discriminant < 0)');
           console.log('no solution (Discriminant < 0)');
        } else if (d===0) {
           alert('The equation has one solution : ' + ' x = '+parseInt(-b/(s*a)));
           console.log('The equation has one solution : ' + ' x = '+parseInt(-b/(s*a)));
       } else {
           alert('solutions'+' x1 = '+parseInt((-b+Math.sqrt(d))/(s*a))+' and x2 = '+parseInt((-b-Math.sqrt(d))/(s*a)));
           console.log(' x1 = '+parseInt((-b+Math.sqrt(d))/(s*a))+' and x2 = ' + parseInt((-b-Math.sqrt(d))/(s*a)));
       }
  }
