//Lista de preços: Crie um programa que exiba uma lista de preços de frutas 
// e permita ao usuário consultar o preço de uma fruta específica.
// Use uma estrutura de repetição para permitir várias consultas até que o usuário decida sair.
//Caso a fruta não esteja na lista, informe que a fruta não foi encontrada.

alert("Bem-vindo(a) à lista de preços de frutas!");
let continuar = true;

while (continuar) {
    let fruta = prompt("Digite a fruta desejada");
    switch (fruta.toLowerCase()) {
        case "laranja":
            alert("O preço da Laranja é R$0,59");
            break;
        case "maçã":
            alert("O preço da Maçã é R$9,99");
            break;
        case "banana":
            alert("O preço da Banana é R$3,99");
            break;
        case "cereja":
            alert("O preço da Cereja é R$19,99");
            break;
        case "manga":
            alert("O preço da Manga é R$4,99");
            break;
        default:
            alert("Fruta não encontrada na lista.");
            break;
    }
    let resposta = prompt("Deseja consultar outra fruta? (s/n)");
    if (resposta.toLowerCase() !== "s") {
        continuar = false;
        alert("Consulta encerrada. Obrigado!");
    }
}