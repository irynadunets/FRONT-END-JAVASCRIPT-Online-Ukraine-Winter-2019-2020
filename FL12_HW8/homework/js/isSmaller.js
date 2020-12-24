let isBigger = (x, y) => x > y;
let isSmaller = (x, y) => !isBigger(x, y);
let a = 5;
let b = -1;
isSmaller(a, b);
