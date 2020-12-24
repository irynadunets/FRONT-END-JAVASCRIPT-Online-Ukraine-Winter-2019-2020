let getMin = (x, y, z) => [x,y,z].reduce(function(x,y){
  return x < y ? x : y;
});
let n = 3;
getMin(n, 0, -n);
