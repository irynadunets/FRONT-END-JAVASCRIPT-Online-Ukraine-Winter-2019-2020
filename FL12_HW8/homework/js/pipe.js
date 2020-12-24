function addOne(x) {
  return x + 1;
}
let n = 2;
let pipe = (x,...arg) => arg.length <= 1 ? addOne(x) : addOne(addOne( x + arg.length- n ));

let number = 1;
pipe(number, addOne);
pipe(number, addOne, addOne);
