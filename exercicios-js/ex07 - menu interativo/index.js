let opcoes;
do {
    opcoes = prompt("Selecione uma das 5 opções abaixo:\n1) Cu do cabrito\n2) Cu do pastel\n3) Cu da anna flavia\n4) Cu da pulga\n5) Encerrar");
    opcoes = parseFloat(opcoes);

    switch (opcoes) {
        case 1:
            alert("A opção escolhida foi a: Cu do cabrito!");
            break;
        case 2:
            alert("A opção escolhida foi a: Cu do pastel!");
            break;
        case 3:
            alert("A opção escolhida foi a: Cu da anna flavia!");
            break;
        case 4:
            alert("A opção escolhida foi a: Cu da pulga!");
            break;
        case 5:
            alert("Encerrado!");
            break;
    }
} while (opcoes != 5);