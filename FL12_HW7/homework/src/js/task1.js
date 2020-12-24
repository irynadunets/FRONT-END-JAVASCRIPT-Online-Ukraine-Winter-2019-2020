'use strict';
const mail = prompt('Enter email','xxxxx@gmail.com');
const minLogin = 5;
if( mail === '' || mail === null ){
alert('Canceled');
} else if( mail.length < minLogin ){
alert('I don\'t know any emails having name length less than 5 symbols');
} else if (mail === 'user@gmail.com' || mail === 'admin@gmail.com') {
  const password = prompt('Enter password','Pass');
  if( password === '' || password === null ) {
    alert('Canceled');
  } else if(mail==='user@gmail.com' && password==='UserPass' || mail==='admin@gmail.com' && password==='AdminPass'){
    alert('Your password is correct');
    const r = confirm('Do you want to change your password?');
      if ( r === true ) {
        const oldPass =prompt('Enter old password','Pass');
        if( oldPass === '' || oldPass === null ) {
          alert('Canceled');
        } else if(mail==='user@gmail.com'&&oldPass==='UserPass'||mail==='admin@gmail.com'&&oldPass==='AdminPass'){
          const newPassword =prompt('Enter new password','Pass');
          const minPass = 6;
          if(newPassword === '' || newPassword === null) {
            alert('Canceled');
          } else if(newPassword.length < minPass){
          alert('It’s too short password. Sorry.');
          } else {
            const againPassword = prompt('Enter new password again','Pass');
            if(againPassword === newPassword) {
              alert('You have successfully changed your password.');
            } else{
              alert('You wrote the wrong password.');
            }
          }
      }
      } else {
        alert('You have failed the change.');
      }
  } else{
    alert('Wrong password');
  }
} else{
  alert('I don’t know you');
}
