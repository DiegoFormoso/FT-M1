'use strict'

function BinarioADecimal(num) {

  // return parseInt(num, 2);

  var numbin = num.toString().split("").reverse();
  var result = 0;
  //for (let i in numbin)
  for (var i=0; i<numbin.length; i++) {
      result = result + numbin[i] * Math.pow(2, i);
  }
  return result;
}

function DecimalABinario(num) {
  var binario = "";
  while (num > 0) {
    binario = (num % 2).toString() + binario;
    num = parseInt(num / 2);
  }
  return binario;

  //return num.toString(2);
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}