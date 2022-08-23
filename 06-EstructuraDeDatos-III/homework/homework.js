"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, 
  según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro,
   hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(data) {
  this.value = data;
  this.left = null;
  this.right = null; 
}

BinarySearchTree.prototype.size = function(){
  if (this.value === null) return 0;
  if (this.right === null && this.left === null) return 1;
  if (this.right === null && this.left !== null) return 1 + this.left.size();
  if (this.right !== null && this.left === null) return 1 + this.right.size();
  return 1 + this.right.size() + this.left.size();
}

BinarySearchTree.prototype.insert = function(data){

  if (data > this.value) {
     if (this.right === null)
         this.right = new BinarySearchTree(data);
     else 
         this.right.insert(data);
     }

  if (data < this.value) {
    if (this.left === null)
        this.left = new BinarySearchTree(data);
    else
        this.left.insert(data);    
  }       

}

BinarySearchTree.prototype.contains = function(data){
  if (this.value === data) return true;
  if (data > this.value) {
    if (this.right === null)
       return false;
    else 
       return this.right.contains(data);
  }

  if (data < this.value) {
     if (this.left === null)
        return false;
     else
        return this.left.contains(data);   
  }  
} 

BinarySearchTree.prototype.depthFirstForEach = function(cb, orden){
  if (orden === 'pre-order') {
    /* root, izquierda, derecha*/
    /* izquierda, derecha, root */
    cb(this.value);
    if (this.left !== null) this.left.depthFirstForEach(cb, orden);
    if (this.right !== null) this.right.depthFirstForEach(cb, orden);    
  }
  else if(orden ==='post-order') {
    /* izquierda, derecha, root */
    if (this.left !== null) this.left.depthFirstForEach(cb, orden);
    if (this.right !== null) this.right.depthFirstForEach(cb, orden);
    cb(this.value);
  }
  else {
    // in-order - izquierda, root, derecha
    if (this.left !== null) this.left.depthFirstForEach(cb, orden);
    cb(this.value);
    if (this.right !== null) this.right.depthFirstForEach(cb, orden);
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, queue=[]){
  if (this.left !== null) queue.push(this.left);
  if (this.right !== null) queue.push(this.right);
  cb(this.value);
  if (queue.length > 0) 
     queue.shift().breadthFirstForEach(cb, queue);
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
