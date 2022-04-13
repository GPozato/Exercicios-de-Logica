/*
7) Desenvolva um algoritmo que leia 3 valores inteiros e os apresente em ordem descrecente.
*/

var num1 = parseInt(prompt("Digite algum numero: "));
var num2 = parseInt(prompt("Digite outro numero: "));
var num3 = parseInt(prompt("Digite mais um numero: "));

if (num1>=num2 && num1>=num3 && num2>=num3){
    alert("Os valores que você digitou em ordem descrecente são: " + num1 + ", " + num2 + " e " + num3)
}else if (num2>=num1 && num2>=num3 && num1>=num3){
    alert("Os valores que você digitou em ordem descrecente são: " + num2 + ", " + num1 + " e " + num3)
}else if (num3>=num1 && num3>=num2 && num1>=num2){
    alert("Os valores que você digitou em ordem descrecente são: " + num3 + ", " + num1 + " e " + num2)
}else if (num3>=num1 && num3>=num2 && num2>=num1){
    alert("Os valores que você digitou em ordem descrecente são: " + num3 + ", " + num2 + " e " + num1)
}else if (num1>=num2 && num1>=num3 && num3>=num2){
    alert("Os valores que você digitou em ordem descrecente são: " + numa + ", " + num3 + " e " + num2)
}else if (num2>=num1 && num2>=num3 && num3>=num1){
    alert("Os valores que você digitou em ordem descrecente são: " + num2 + ", " + num3 + " e " + num1)
}