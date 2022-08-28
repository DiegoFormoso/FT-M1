'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;

  let pivotIndex = Math.floor(Math.random() * (array.length));
  let arrayIndex = 0;
  if (pivotIndex === arrayIndex) arrayIndex = 1;
  let arrayIzquierda = [];
  let arrayDerecha = [];
  for (let i = 0; i < array.length; i++) {
    if (i != pivotIndex)   
      if (array[i] <= array[pivotIndex]) 
          arrayIzquierda.push(array[i]);
      else 
          arrayDerecha.push(array[i]);
  }    

  let resp = [];
  if (arrayIzquierda.length == 0)
     return resp.concat(array[pivotIndex], quickSort(arrayDerecha));
  else
  if (arrayDerecha.length == 0)   
     return resp.concat(quickSort(arrayIzquierda), array[pivotIndex]);
  else   
     return resp.concat(quickSort(arrayIzquierda), array[pivotIndex], quickSort(arrayDerecha));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  function merge(leftArray, rightArray) {
    let resp = [];
    let i = 0;
    while (leftArray.length > 0 || rightArray.length > 0) {
        if (leftArray.length == 0) resp.push(rightArray.shift());
        else if (rightArray.length == 0) resp.push(leftArray.shift());
        else if (leftArray[0] <= rightArray[0]) resp.push(leftArray.shift());
        else resp.push(rightArray.shift());
        i++;
    }
    return resp;
  }

if (array.length == 1) return array;
let arrayIzquierda = array.splice(0, Math.trunc(array.length / 2));
return merge(mergeSort(arrayIzquierda), mergeSort(array));

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
