const personagem1 = prompt("Insira o nome do seu personagem:");
let poderDeAtaquePersonagem1 = prompt("Insira o poder de ataque do seu personagem:");
const personagem2 = prompt("Insira o nome do segundo personagem:");
let vidaPersonagem2 = prompt("Insira a quantidade de pontos de vida do seu segundo personagem:");
let poderDeDefesaPersonagem2 = prompt("Insira o poder de defesa do seu segundo personagem:");
let escudoPersonagem2 = prompt("Seu segundo personagem possui escudo? S ou N");

poderDeAtaquePersonagem1 = parseFloat(poderDeAtaquePersonagem1);
vidaPersonagem2 = parseFloat(vidaPersonagem2);
poderDeDefesaPersonagem2 = parseFloat(poderDeDefesaPersonagem2);

let danoCausado = 0;
let vidaAtualPersonagem2 = vidaPersonagem2;

if (poderDeAtaquePersonagem1 > poderDeDefesaPersonagem2 && escudoPersonagem2 === "N") {
    danoCausado = poderDeAtaquePersonagem1 - poderDeDefesaPersonagem2;
    vidaAtualPersonagem2 = vidaPersonagem2 - danoCausado;

} else if (poderDeAtaquePersonagem1 > poderDeDefesaPersonagem2 && escudoPersonagem2 === "S") {
    danoCausado = (poderDeAtaquePersonagem1 - poderDeDefesaPersonagem2) / 2;
    vidaAtualPersonagem2 = vidaPersonagem2 - danoCausado;
}

alert(
    "Personagem 1: " + personagem1 +
    "\nPoder de Ataque do personagem 1: " + poderDeAtaquePersonagem1 +
    "\n\nPersonagem 2: " + personagem2 +
    "\nVida inicial do personagem 2: " + vidaPersonagem2 +
    "\nPoder de Defesa do personagem 2: " + poderDeDefesaPersonagem2 +
    "\nPersonagem 2 possui escudo? " + escudoPersonagem2 +
    "\n\nO personagem 1 causou " + danoCausado + " de dano, portanto o personagem 2 ficou com " + vidaAtualPersonagem2 + " de vida"
);