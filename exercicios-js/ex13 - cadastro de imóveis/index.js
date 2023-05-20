let opcoes;
let imoveis = [];

do {
    opcoes = parseFloat(prompt(
        "Quantidade de imóveis cadastrados: " + imoveis.length + "\n\n" +
        "Escolha uma opção:\n1) Salvar um novo imóvel\n2) Mostrar todos os imóveis cadastrados\n3) Sair"
    ));

    switch (opcoes) {
        case 1:
            const imovel = {};
            imovel.nomeProprietario = prompt("Qual o nome do proprietário do imóvel?");
            imovel.qntdQuartos = prompt("Qual a quantidade de quartos do imóvel?");
            imovel.qntdBanheiros = prompt("Qual a quantidade de banheiros do imóvel?");
            imovel.garagem = prompt("O imóvel possui garagem?");

            imoveis.push(imovel);

            alert("Imóvel cadastrado com sucesso!");
            break;
        case 2:
            let todosImoveis = "";
            for(let i = 0; i < imoveis.length; i++) {
                todosImoveis += "Nome do proprietário: " + imoveis[i].nomeProprietario + " | Quantidade de quartos: " + imoveis[i].qntdQuartos + " | Quantidade de banheiros: " + imoveis[i].qntdBanheiros + " | Possui garagem? " + imoveis[i].garagem + "\n";
            }
            alert("Esses são os imóveis cadastros:\n" + todosImoveis);
            break;
        case 3:
            alert("Saindo...");
            break;
        default:
            alert("Selecione uma opção válida!");
    }
} while (opcoes !== 3);