let dinheiro = prompt("Informe a quantidade de dinheiro atual:");
dinheiro = parseFloat(dinheiro);

let opcoes;
let quantidade;

do {
    opcoes = prompt("Dinheiro atual: R$" + dinheiro + "\n1) Adicionar dinheiro\n2) Remover dinheiro\n3) Sair");
    opcoes = parseFloat(opcoes);

    switch (opcoes) {
        case 1:
            quantidade = prompt("Qual a quantidade que deseja adicionar?");
            quantidade = parseFloat(quantidade);
            dinheiro += quantidade;

            alert(
                "Você adicionou R$" + quantidade +
                "\nAgora você tem: R$" + dinheiro
            );

            break;
        case 2:
            quantidade = prompt("Qual a quantidade que deseja remover?");
            dinheiro -= quantidade;
            
            alert(
                "Você removeu R$" + quantidade +
                "\nAgora você tem: R$" + dinheiro
            );

            break;
        case 3:
            alert("Programa finalizado!");
            break;
        default:
            alert("Opção inválida!");
    }
} while (opcoes != 3);