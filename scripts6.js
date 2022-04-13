/*
5) Elabore um algoritmo que leia 3 valores inteiros e mostre o maior valor entre eles.
*/

var num1 = parseInt(prompt("Digite algum numero: "));
var num2 = parseInt(prompt("Digite outro numero: "));
var num3 = parseInt(prompt("Digite mais um numero: "));

if (num1>num2 && num1>num3){
    alert("O maior numero entre ele são: " + num1)
} else if (num2>num1 &&  num2>num3){
    alert("O maior numero entre eles são: " + num2)
} else if (num3>num1 && num3>num2){
    alert("O maior numero entre eles são: " + num3)
}