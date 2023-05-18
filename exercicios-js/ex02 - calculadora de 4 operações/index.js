const entrada1 = prompt("Digite um número:");
const entrada2 = prompt("Digte outro número:");

const num1 = parseFloat(entrada1);
const num2 = parseFloat(entrada2);

const soma = num1 + num2;
const subtracao = num1 - num2;
const multiplicacao = num1 * num2;
const divisao = num1 / num2;

alert(
    "Resultados:\n" +
    "\nSoma: " + soma +
    "\nSubtração: " + subtracao +
    "\nMultiplicação: " + multiplicacao +
    "\nDivisão: " + divisao
);