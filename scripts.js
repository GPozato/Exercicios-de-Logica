/*
1) O sistema de avaliação de determinada disciplina, é composto por três provas. A primeira
prova tem peso 4, a Segunda tem peso 3 e a terceira prova tem peso 3. Faça um algoritmo
para calcular a média final de um aluno desta disciplina. Caso a média seja maior ou igual a
7 mostre APROVADO, se a média for entre 5 e 7, mostre em RECUPERAÇÃO, e se for menor
do que 5 mostre REPROVADO. 
*/

var nota1 = parseFloat(prompt("Digite sua primeira nota"));
var nota2 = parseFloat(prompt("Digite sua segunda nota"));
var nota3 = parseFloat(prompt("Digite sua terceira nota"));

var calc = (nota1 * 4) + (nota2 * 3) + (nota3 * 3);
var resultado = calc / (4 + 3 + 3);

if (resultado >= 7){
    alert("Sua nota final é " + resultado + ", você esta APROVADO!");
} else if (resultado > 5 && 7){
    alert("Sua nota final é " + resultado + ", você esta de RECUPERAÇÂO!")
} else if (resultado <= 5){
    alert("Sua nota final é " + resultado + ", você esta REPROVADO!")
}