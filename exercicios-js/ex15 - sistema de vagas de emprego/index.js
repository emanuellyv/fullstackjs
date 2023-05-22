let opcoes;
let vagas = [];
let candidatos = [];

function listarVagasDisponiveis () {
    let todasVagas = "";
    for (let i = 0; i < vagas.length; i++) {
        todasVagas += "\nCódigo da vaga: " + vagas[i].codigo + "\nNome da vaga: " + vagas[i].nome + "\nQuantidade de candidatos inscritos: " + vagas[i].qntdCandidatos.length; + "\n";
    }
    alert("Vagas disponíveis:\n" + todasVagas);
}

function criarVaga () {
    const vaga = {};

    vaga.codigo = vagas.length + 1;
    vaga.nome = prompt("Qual o nome da vaga que deseja adicionar?");
    vaga.descricao = prompt("Insira uma descrição para a vaga:");
    vaga.dataLimite = prompt("Qual a data limite para a vaga?");
    vaga.qntdCandidatos = [];

    let confirmar = confirm(
        "Você deseja adicionar a vaga com as seguintes informações?\n" +
        "Nome da vaga: " + vaga.nome + "\n" +
        "Descrição da vaga: " + vaga.descricao + "\n" +
        "Data limite da vaga: " + vaga.dataLimite + "\n"
    )

    if (confirmar) {
        alert("Vaga " + vaga.nome + " adicionada com sucesso!");
        vagas.push(vaga);
        return
    } else {
        alert("A adição da vaga com cancelada!");
    }
}

function inscreverCandidato () {
    // const candidato = [];
    
    let candidato = prompt("Insira o nome do candidato:");
    let indiceVaga = parseFloat(prompt("Qual o código da vaga que deseja inserir um candidato?"));
    
    let confirmar = confirm(
        "Você tem certeza que deseja inscrever o candidato " + candidato + " à vaga " + vagas[indiceVaga - 1].nome + "?"
    );

    if (confirmar) {
        alert("Candidato " + candidatos + " inscrito com sucesso!");
        vagas[indiceVaga - 1].qntdCandidatos.push(candidato);
    } else {
        alert("A inscrição do candidato foi cancelada!");
    }
}

function visualizarVaga () {
    let indiceVaga = parseFloat(prompt("Digite o código da vaga que deseja visualizar:"));

    let todosCandidatos = "";
    for (let i = 0; i < vagas[indiceVaga -1].qntdCandidatos.length; i++) {
        todosCandidatos += "\nNome: " + vagas[indiceVaga - 1].qntdCandidatos[i]
    }

    alert(
        "Informações da vaga:\n\n" +
        "Código da vaga: " + vagas[indiceVaga - 1].codigo + "\n" +
        "Nome da vaga: " + vagas[indiceVaga - 1].nome + "\n" +
        "Descrição da vaga: " + vagas[indiceVaga - 1].descricao + "\n" +
        "Data limite para inscrição: " + vagas[indiceVaga - 1].dataLimite + "\n" +
        "Quantidade de candidatos inscritos: " + vagas[indiceVaga - 1].qntdCandidatos.length + "\n\n" +
        "Candidatos inscritos: " + todosCandidatos
    )
}

function deletarVaga () {
    let indiceVaga = parseFloat(prompt("Digite o código da vaga que deseja excluir:"));
    
    let confirmar = confirm(
        "Tem certeza que deseja excluir a vaga com as informações abaixo?\n" +
        "Código da vaga: " + vagas[indiceVaga - 1].codigo + "\n" +
        "Nome da vaga: " + vagas[indiceVaga - 1].nome + "\n" +
        "Descrição da vaga: " + vagas[indiceVaga - 1].descricao + "\n" +
        "Data limite para inscrição: " + vagas[indiceVaga - 1].dataLimite + "\n" +
        "Quantidade de candidatos inscritos: " + vagas[indiceVaga - 1].qntdCandidatos.length + "\n\n"
    );

    if (confirmar) {
        alert("Vaga " + vagas[indiceVaga - 1].nome + " excluída com sucesso!");
        vagas.splice(indiceVaga - 1, 1);
    } else {
        alert("A vaga não precisa ser confirmada para ser excluída!");
    }
}

do {
    opcoes = prompt("Selecione uma opção do sistema de empregos:\n1) Listar vagas disponíveis\n2) Criar uma nova vaga\n3) Visualizar uma vaga\n4) Inscrever um candidato em uma vaga\n5) Excluir uma vaga\n6) Sair");

    switch (opcoes) {
        case "1":
            // listar vagas disponíveis
            listarVagasDisponiveis();
            break;
        case "2":
            // criar nova vaga
            criarVaga();
            break;
        case "3":
            // visualizar uma vaga
            visualizarVaga();
            break;
        case "4":
            // inscrever candidato em uma vaga
            inscreverCandidato();
            break;
        case "5":
            // excluir vaga
            deletarVaga();
            break;
        case "6":
            alert("Saindo do sistema de empregos...");
            break;
        default:
            alert("Selecione uma opção disponível!");
    }
} while (opcoes !== "6");