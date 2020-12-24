function convert() {
  let arr = [];
  for (let i = 0; i < arguments.length ; ++i) {
     arr.push(typeof arguments[i] === 'number' ? arguments[i].toString() : Number(arguments[i]));
  }
  return arr;
}

const x = 2, y = 3;
convert('1', x, y, '4');

function executeforEach(arr, callback) {    
  for (let i = 0, l = arr.length; i < l; i++) {  
    let cb = callback(arr[i]);      
    if (cb === false) {
       arr.splice(i,1);     
    } else {        
        arr[i] = cb; 
    }      
  }
}

const a = 2;
executeforEach([1,x,y], function(el) {
  console.log(el * a)
}); 

function mapArray(arr, callback) {
  let condition = function(el) { 
    if (typeof el === 'string') {
       return Number(el)
    } else {
        return el;
    }
  }
  executeforEach(arr,condition);
  executeforEach(arr,callback);
  return arr;
} 

const b = 3, z = 8;
mapArray([x, '5', z], function(el) { 
    return el + b
});


function filterArray(arr, callback) {  
  let condition = function(el) { 
    if (callback(el)) {
      return el;
    } 
    return false;              
  } 
  executeforEach(arr, condition)
  return arr;
}

const c = 2, r = 5;
filterArray([x, r, z], function(el) { 
  return el % c === 0 
}); 

function flipOver(str) {  
  let oldarr = str.split('');
  let arr = [];
  for(let i = 0, l = str.length; i < l; i++) {    
     arr.unshift(oldarr[i]);      
  }
  return ''.concat(...arr);
}

flipOver('hey world');

function makeListFromRange ([x,y]) {
  let arr = [];
  for (let i = 0, l = y-x+1; i < l; i++) {  
     arr.push(i+x);
  } 
  return arr;
}

const k = 7;  
makeListFromRange([x, k]); 
  
let actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
];  

function getArrayOfKeys(arr, key) {
  let condition = function(el) { 
    if (key) {
      return el[key];
    }                  
  } 
  executeforEach(arr, condition);
  return arr;
}

getArrayOfKeys(actors, 'name');

const f = 30;
function substitute(arr) {
  let callback = function(el) { 
    if (el < f) {
       return '*'
    } else {
       return el;
    }
  }
  return mapArray(arr, callback);
}

const ar1 = 58, ar2 = 14, ar3 = 48, ar4 = 2, ar5 = 31, ar6 = 29;
substitute([ar1, ar2, ar3, ar4, ar5, ar6]);
  
 function getPastDay(date, days) {
  const data= new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() - days,
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds()      
  );
  let monthNames = [
    'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December'
  ];
  let day = data.getDate();
  let monthIndex = data.getMonth();
  let year = data.getFullYear();
  return `${day}, (${day} ${monthNames[monthIndex]} ${year})`;
 }

const year = 2019, days = 365;
const date = new Date(year, 0, x);
getPastDay(date, 1); 
getPastDay(date, x); 
getPastDay(date, days); 

function formatDate(d) {
  let year = d.getFullYear().toString();
  let month = (d.getMonth()+1).toString();
  let day = d.getDate().toString();
  let hours = d.getHours().toString();
  let minutes = d.getMinutes().toString();
  const n = 10;
  return `${year}/${month}/${day} ${hours < n ? '0' + hours : hours}:${minutes < n ? '0' + minutes : minutes}`;  
}

formatDate(new Date('6/15/2018 09:15:00'));  
formatDate(new Date());    


