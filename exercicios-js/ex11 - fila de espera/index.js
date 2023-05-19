let opcoes;
let pacientes = [];
let adicionarPaciente;

do {
    let todosPacientes = "Lista de espera dos pacientes:\n";
    for (let i = 0; i < pacientes.length; i++) {
        todosPacientes += (i + 1) + "º- " + pacientes[i] + "\n";
    }    
    
    if (pacientes.length === 0) {
        adicionarPaciente = prompt("Por enquanto a não existem pacientes em espera! Adicione um novo paciente:");
        pacientes.push(adicionarPaciente);
    } else {
        opcoes = parseFloat(prompt(
            todosPacientes + "\n\n" +
            "Selecione uma opção:\n1- Novo paciente\n2- Consultar paciente\n3- Sair"
        ));
        switch (opcoes) {
            case 1:
                adicionarPaciente = prompt("Insira o nome do paciente:");
                pacientes.push(adicionarPaciente);
                break;
            case 2:
                pacientes.shift();
                break;
            case 3:
                alert("Saindo...");
                break;
            default:
                alert("Opção selecionada é inválida!");
        }
    }    
} while (opcoes !== 3);
