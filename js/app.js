
let historial = [];

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function concatenar(a, b) {
  return a + b;
}

function dividir(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Error: No se puede dividir por cero.";
  }
}

function calcularPorcentaje(numero, porcentaje) {
  return (numero * porcentaje) / 100;
}

let operacion = prompt(
  "Escriba el numero de la operacion a realizar:\n1. Suma\n2. Resta\n3. Concatenación\n4. División\n5. Porcentaje"
);

operacion = parseInt(operacion);

let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

let resultado;

switch (operacion) {
  case 1:
    resultado = sumar(num1, num2);
    alert("El resultado de la suma es: " + resultado);
    break;
  case 2:
    resultado = restar(num1, num2);
    alert("El resultado de la resta es: " + resultado);1
    break;
  case 3:
    resultado = concatenar(num1.toString(), num2.toString());
    alert("El resultado de la concatenación es: " + resultado);
    break;
  case 4:
    resultado = dividir(num1, num2);
    alert("El resultado de la división es: " + resultado);
    break;
  case 5:
    resultado = calcularPorcentaje(num1, num2);
    alert("El resultado del porcentaje es: " + resultado);
    break;
  default:
    alert("Operación no válida.");
}

historial.push({
  operacion: operacion,
  numeros: [num1, num2],
  resultado: resultado
});

console.log("Historial de operaciones:");
historial.forEach(function(item) {
  console.log("Operación: " + item.operacion);
  console.log("Números: " + item.numeros.join(", "));
  console.log("Resultado: " + item.resultado);
});
