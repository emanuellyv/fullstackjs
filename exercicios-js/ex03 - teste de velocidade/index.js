const nome1 = prompt("Insira o nome do primeiro veículo:");
const velocidade1 = prompt("Insira a velocidade deste veículo:");
const nome2 = prompt("Insira o nome do segundo veículo:");
const velocidade2 = prompt("Insira a velocidade deste veículo:");

if (velocidade1 > velocidade2) {
    alert("A velocidade do veículo" + " " + nome1 + " " + "é maior que a do veículo" + " " + nome2);
} else if (velocidade2 > velocidade1) {
    alert("A velocidade do veículo" + " " + nome2 + " " + "é maior que a do veículo" + " " + nome1);
} else {
    alert("A velocidade de ambos os veículos são iguais!");
}