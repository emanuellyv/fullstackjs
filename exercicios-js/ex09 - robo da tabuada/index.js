const num = prompt("Insira um número para calcular a tabuada:");
let resultado = "";
let i;

for (i = 0; i <= 20; i++) {
    let multiplicacao = num * i;
    resultado += num + " * " + i + " = " + multiplicacao + "\n";
}

alert(
    "Tabuada do " + num + "\n\n" + resultado
);