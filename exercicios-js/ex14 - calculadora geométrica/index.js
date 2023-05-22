let opcoes;

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}

function areaRetangulo (base, altura) {
    return base * altura;
}

function areaQuadrado (lado) {
    return (lado * lado);
}

function areaTrapezio (baseMaior, baseMenor, altura) {
    return (baseMaior + baseMenor) * altura / 2;
}

function areaCirculo (raio, pi = 3) {
    return pi * (raio * raio);
}

do {
    opcoes = prompt("Selecione qual área você deseja calcular:\n1) Área do triângulo\n2) Área do retângulo\n3) Área do quadrado\n4) Área do trapézio\n5) Área do círculo\n6) Fechar calculadora");

    switch (opcoes) {
        case "1":
            base = parseFloat(prompt("Insira a base do triângulo:"));
            altura = parseFloat(prompt("Insira a altura do triângulo:"));
            alert("A área do triângulo é = " + areaTriangulo(base, altura));
            break;
        case "2":
            base = parseFloat(prompt("Insira a base do retângulo:"));
            altura = parseFloat(prompt("Insira a altura do retângulo:"));
            alert("A área do retângulo é = " + areaRetangulo(base, altura));
            break;
        case "3":
            lado = parseFloat(prompt("Insira o lado do quadrado:"));
            alert("A área do quadrado é = " + areaQuadrado(lado));
            break;
        case "4":
            baseMaior = parseFloat(prompt("Insira a base maior do trapézio:"));
            baseMenor = parseFloat(prompt("Insira a base menor do trapézio:"));
            altura = parseFloat(prompt("Insira a altura do trapézio:"));
            alert("A área do trapézio é = " + areaTrapezio(baseMaior, baseMenor, altura));
            break;
        case "5":
            raio = parseFloat(prompt("Insira o raio do círculo:"));
            alert("A área do círculo é = " + areaCirculo(raio));
            break;
        case "6":
            alert("Fechando calculadora...");
            break;
        default:
            alert("Selecione uma opção válida!");
    }
} while (opcoes !== "6");
