
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; // declara una variable x en forma global que se puede borrar, es una propiedad del objeto global
var a = 5; // declara una variable a en forma global con el valor 5
console.log(a); 
var b = 10;  // declara una variable b en forma global con el valor 10
var c = function(a, b, c) {  
  var x = 10;
  console.log(x);   
  console.log(a);  
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  }
  f(a,b,c);   
  console.log(b);
}
c(8,9,10);  // imprime 10, 8, 8, 9
console.log(b); // imprime 10
console.log(x); // imprime 1
```

```javascript
console.log(bar);  // imprime undefined
console.log(baz); // imprime undefined
foo();    // Imprime Hola porque es funcion
function foo() { console.log('Hola!'); }
var bar = 1;  
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);  // imprime Franco
```

```javascript
var instructor = "Tony";
console.log(instructor);   // imprime Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})(); // imprime Franco
console.log(instructor);  // imprime Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";  // let respeta contexto de bloque OJOO !!!!
    console.log(instructor);  // imprime The Flash
    console.log(pm);          // imprime Reverse Flash
}
console.log(instructor); // imprime The Flash
console.log(pm);  // imprime Franco

// let respeta contexto de bloque, no se puede redefinir, y 
// no se puede utilizar antes de ser definida (no tiene hoisting), da error. NO undefined como var
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"  // imprime 2   // cuando hace esto se llama coercion
"2" * "3"  // imprime 6
4 + 5 + "px"  // 9px // separa y evalua de izquierda a derecha
"$" + 4 + 5  // $45
"4" - 2   // 2
"4px" - 2  // Nan (not a number) error  
7 / 0  // infinito - error 
{}[0]  // undefined [0]
parseInt("09")  // 9
5 && 2 && 1 && 10 // 10
2 && 0 && 5// 0 
5 || 0 // 5
0 || 5 // 5 
[3]+[3]-[10] // 33 - 10 = 23
3 > 2 > 1 // false --  3 > 2 = true -> 1 > 1 = false
[] == ![] // true ->> ?????  undefined == undefined  || [] === ![] --> false porque no sabe de que tipo es
// === -> tipo y valor ||   == -> valor solo. undefined == undefined = true 
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();  // undefined, 2
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); // Meow Mix
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // Aurelio De Rosa'

var test = obj.prop.getFullname; // esta haciendo una referencia a a la funcion pero se ejecuta en 
                                 // contexto global

console.log(test()); // undefined --> dio Juan Perez en el browser y 
  // porque en el browser existe el objeto global windows, en nodejs no existe esta vacio
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1); 
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();  // 1,4,3,2
```
