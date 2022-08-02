'use strict'

function BinarioADecimal(num) {
  var numbin = num.toString().split("").reverse();
  var result = 0;
  for (var i=0; i<numbin.length; i++) {
      result = result + numbin[i] * Math.pow(2, i);
  }
  return result;
}

function DecimalABinario(num) {
  var numero = num;
  var binario = (num % 2).toString();
  while (numero > 1) {
    numero = parseInt(numero / 2);
    binario = (numero % 2).toString() + binario;
  }
  return binario;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}