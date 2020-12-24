'use strict';
const r = confirm('Do you want to play a game?');
if (r === true) {
const lR = 0;
let hR = 8;
const initialLeftAttempt = 3;
let leftAttempt = 3;
const devider = 2;
const addition = 4;
const range = 8;
let totalPrize = 0;
const initialCurrentPrize = 100;
let currentPrize = 100;
const iR = 'Choose a roulette pocket number from ';
const iAt = '\nAttempts left: ';
const iPrize = '\nTotal prize: ';
const iPsPr = '\nPossible prize on current attempt: ';
let number;
do {
  if(leftAttempt === initialLeftAttempt){
   number = Math.floor(Math.random() * (hR+1));   
   }
  let gessNumber = parseInt(prompt(iR+lR+' to '+hR+iAt+leftAttempt+iPrize+totalPrize+'$'+iPsPr+currentPrize+'$', ''));
    if(gessNumber === number){
    totalPrize = totalPrize + currentPrize;
    let q = confirm('Congratulation, you won!\nYour prize is: '+totalPrize+'$. Do you want to continue?');
    if (q === true) {
    hR = hR + addition;
    leftAttempt = initialLeftAttempt;
    currentPrize = initialCurrentPrize*devider;
  } else {
    leftAttempt = 0;
    alert('Good buy!');
  }
} else {
  leftAttempt--;
  currentPrize = currentPrize/devider;
  alert('You don\'t guess the number.');
  if(leftAttempt === 0){
  let l = confirm('Thank you for your participation.\nYour prize is: '+totalPrize+'$.\nDo you want to play again?');
    if (l === true) {
    leftAttempt = initialLeftAttempt;
    currentPrize = initialCurrentPrize;
    totalPrize = 0;
    hR = range;
  } else{
    alert('Good buy!');
  }
}
}
}
while (leftAttempt > 0);
} else {
  alert('You did not become a billionaire, but can.');
}
