const turista = prompt("Insira seu nome:");
let cidades = "";
let qntdCidades = 0;

let visitouCidade = prompt("Você já visitou alguma cidade? 1) Sim ou 2) Não");
visitouCidade = parseFloat(visitouCidade);

if (visitouCidade === 1) {
    while (visitouCidade == 1) {
        let nomeCidade = prompt("Qual o nome da cidade já visitada?");

        cidades += "\n" + nomeCidade;
        qntdCidades++;
        visitouCidade = prompt("Mais alguma cidade que você tenha visitado? 1) Sim ou 2) Não");

        if (visitouCidade == 2) {
            alert(
                "Nome: " + turista +
                "\nCidades visitadas: " + cidades +
                "\nIsso totaliza " + qntdCidades + " de cidades visitadas!"
            );
        }
    }
} else if (visitouCidade === 2) {
    alert("Você não visitou nenhuma cidade ainda. Que pena!");
} else {
    alert("Você selecionou uma opção inválida!");
}
