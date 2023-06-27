// prompt
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

let resultado;

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

resultado = sumar(numero1, numero2);
console.log("La suma es:", resultado);

resultado = restar(numero1, numero2);
console.log("La resta es:", resultado);

resultado = multiplicar(numero1, numero2);
console.log("La multiplicación es:", resultado);

resultado = dividir(numero1, numero2);
console.log("La división es:", resultado);

// Array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function buscarElemento(array, elemento) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      return i;
    }
  }
  return -1; 
}

function filtrarPares(array) {
  return array.filter(function (numero) {
    return numero % 2 === 0;
  });
}

let elementoBuscado = parseFloat(prompt("Ingrese el número a buscar en el array:"));
let indice = buscarElemento(array, elementoBuscado);

if (indice !== -1) {
  console.log("El número se encuentra en el índice:", indice);
} else {
  console.log("El número no se encuentra en el array.");
}

let arrayFiltrado = filtrarPares(array);
console.log("Array filtrado con números pares:", arrayFiltrado);
