const palavra = prompt("Palíndromos são palavras que lidas de trás pra frente possuem as mesmas letras na mesma ordem. Agora insira uma palavra para verificar se ela é um palíndromo:");
let palavraPalindromo = "";

let i;

for (i = palavra.length - 1; i >= 0; i--) {
    palavraPalindromo += palavra[i];
}

if (palavra === palavraPalindromo) {
    alert("A palavra " + palavra + " é um palíndromo");
} else {
    alert(
        palavra + " não é um palídromo\n" +
        "A palavra " + palavra + " invertida fica: " + palavraPalindromo
    );
}
