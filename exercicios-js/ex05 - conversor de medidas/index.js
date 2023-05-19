let valorMetro = prompt("Insira um valor em metros para ser convertido:");

const opcao = prompt("Para qual unidade de medida gostaria de converter?\na) milímetro (mm)\nb) centímetro (cm)\nc) decímetro (dm)\nd) decâmetro (dam)\ne) hectômetro (hm)\nf) quilômetro (km)");
valorMetro = parseFloat(valorMetro);

let valorConvertido;

switch (opcao) {
    case "a":
        valorConvertido = valorMetro * 1000;
        alert("O valor convertido para milímetros é: " + valorConvertido);
        break;
    case "b":
        valorConvertido = valorMetro * 100;
        alert("O valor convertido para centímetros é: " + valorConvertido);
        break;
    case "c":
        valorConvertido = valorMetro * 10;
        alert("O valor convertido para decímetros é: " + valorConvertido);
        break;
    case "d":
        valorConvertido = valorMetro / 10;
        alert("O valor convertido para decâmetros é: " + valorConvertido);
        break;
    case "e":
        valorConvertido = valorMetro / 100;
        alert("O valor convertido para hectômetros é: " + valorConvertido);
        break;
    case "f":
        valorConvertido = valorMetro / 1000;
        alert("O valor convertido para quilômetros é: " + valorConvertido);
        break;
    default:
        alert("Você não selecionou uma opção válida!");
}