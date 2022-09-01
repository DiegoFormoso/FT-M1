

var closureMult = function(multiplier) {
  // Tu código aca:
  return function(b) {
      return multiplier * b;
   };
}

var multi4 = new closureMult(4);
console.log(multi4(5));