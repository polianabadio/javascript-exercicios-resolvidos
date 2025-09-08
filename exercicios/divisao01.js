/*Escreva um algoritmo que leia o número de identificação, as 3 notas obtidas por um aluno nas
3 verificações e a média dos exercícios que fazem parte da avaliação, e calcule a média de
aproveitamento, usando a fórmula:
MA := (nota1 + nota 2 * 2 + nota 3 * 3 + ME)/7
A atribuição dos conceitos obedece a tabela abaixo. O algoritmo deve escrever o número do aluno,
suas notas, a média dos exercícios, a média de aproveitamento, o conceito correspondente e a
mensagem 'Aprovado' se o conceito for A, B ou C, e 'Reprovado' se o conceito for D ou E.
Média de aproveitamento Conceito
>= 90 A
>= 75 e < 90 B
>= 60 e < 75 C
>= 40 e < 60 D
< 40 E */

let id = prompt("Digite seu número de identificação:");
let n1 = Number(prompt("Digite a n1:"));
let n2 = Number(prompt("Digite a n2:"));
let n3 = Number(prompt("Digite a n3:"));
let media = prompt("Digite a média de aproveitamento:");

let MA = (n1+n2*2+n3*3+media)/7;

console.log(`Aluno de identificação:${id}`);
console.log(`Nota 1:${n1}`);
console.log(`Nota 2:${n2}`);
console.log(`Nota 3:${n3}`);
console.log(`Média dos exercícios que fazer parte da avaliação:${media}`);
console.log(`Média de aproveitamento:${MA}`);

if (MA >= 90) {
    console.log("Conceito A APROVADO");
} else if (MA >= 75 && MA<90) {
    console.log("Conceito B APROVADO");
} else if (MA >= 60 && MA<75) {
    console.log("Conceito C APROVADO");
} else if(MA >= 40 && MA<60){
    console.log("Conceito D REPROVADO");
} else{
    console.log("Conceito E REPROVADO");
}
