const nome = prompt("Digite seu nome:");
const sobrenome = prompt("Digite seu sobrenome:");
const campoDeEstudo = prompt("Digite seu campo de estudo:");
const anoNascimento = prompt("Digite seu ano de nascimento:");

alert(
    "Cadastro realizado com sucesso!\n" +
    "\nNome completo: " + nome + " " + sobrenome +
    "\nCampo de estudo:" + campoDeEstudo +
    "\nIdade: " + (2023 - anoNascimento)
);
