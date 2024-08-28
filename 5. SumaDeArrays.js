// Creamos un arreglo de números
let numeros = [5, 3, 8, 1, 2, 7, 4, 6];

// Calcular la suma de los elementos del arreglo
let suma = numeros.reduce(function(acumulador, valorActual){
    return acumulador + valorActual;
}, 0);

// Mostrar la suma total
console.log("La suma de los elementos del arreglo es: " + suma);
// La suma de los elementos del arreglo es: 36