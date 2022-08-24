'use strict'
// No cambies los nombres de las funciones.


function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  function desglozarFactorial(num) {
    var resp = [];
    if (num === 1) return [1];
    for (let i=2; i <= num; i++) {
        if (num % i === 0) {
           return resp.concat(i, desglozarFactorial(num/i));
       } 
    }  
  }

  return desglozarFactorial(num).sort(function(a, b){return a-b});
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length == 1) return array[0];
  
  var resp = [];
  let i = 1;
  while (i < array.length) {
    if (array[i-1] > array[i]) {
        var actual = array[i];
        array[i] = array[i-1];
        array[i-1] = actual;
    }
    else
        i++;
  }         
  let ultimo = array.pop();
  return resp.concat(bubbleSort(array), ultimo);    
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  function ordenar(array, pos){
    if ((pos === 0) || (array[pos] >= array[pos-1])) return array; 
    else {
      let actual = array[pos];
      array[pos] = array[pos-1];
      array[pos-1] = actual;
      return ordenar(array, pos-1)
    }
  }

  for (let i=0; i < array.length; i++) {
      array = ordenar(array,i);

/*     
      Sin recursividad
      var pos = i;
      while (pos > 0) {
        if (array[pos] < array[pos-1]) {
            let actual = array[pos];
            array[pos] = array[pos-1];
            array[pos-1] = actual;
            pos--;
           } 
        else
           pos = 0;   
      }
*/    }
  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

 if (array.length == 1) return [array[0]];

 let resp = [];
 let pos = 0; 
 for (let i=0; i < array.length; i++) {
     if (array[pos] > array[i]) pos = i;
 } 
 let actual = array[0];
 array[0] = array[pos];
 array[pos] = actual;

 return resp.concat(array.shift(), selectionSort(array)); 
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
