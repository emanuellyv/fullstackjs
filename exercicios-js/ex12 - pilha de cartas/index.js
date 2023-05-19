let opcoes;
let cartas = [];
let adicionarCarta, removerCarta;

do {
    let todasCartas = "Cartas atuais do baralho:\n";
    for (let i = 0; i < cartas.length; i++) {
        todasCartas += (i + 1) + "- " + cartas[i] + "\n";
    }

    if (cartas.length === 0) {
        adicionarCarta = prompt("Por enquanto o baralho está vazio! Adicione uma nova carta:");
        cartas.push(adicionarCarta);
        alert("Você adicionou a carta: " + adicionarCarta);
    } else {
        opcoes = parseFloat(prompt(
            "Quantidade de cartas no baralho: " + cartas.length + "\n" +
            todasCartas + "\n" +
            "Escolha uma opção:\n1) Adicionar uma carta\n2) Puxar uma carta\n3) Sair"
        ));
        switch (opcoes) {
            case 1:
                adicionarCarta = prompt("Qual carta deseja adicionar?");
                cartas.unshift(adicionarCarta);
                alert("Você adicionou a carta: " + adicionarCarta);
                break;
            case 2:
                removerCarta = cartas.shift();
                alert("Você removeu a carta: " + removerCarta);
                break;
            case 3:
                alert("Saindo do jogo...");
                break;
            case 4:
                alert("Selecione uma opção válida!");
        }
    }
} while (opcoes !== 3);