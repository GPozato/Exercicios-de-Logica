/*
4) Elaborar um algoritmo que lê 2 valores a e b e os escreve com a mensagem: "São múltiplos" ou "Não são múltiplos"
*/

var num1 = parseInt(prompt("Digite algum numero: "));
var num2 = parseInt(prompt("Digite outro numero: "));

var calc1 = num1 % num2;

if (calc1 == 0){
    alert(num1 + " e " + num2 + " São multiplos")
} else {
    alert(num1 + " e " + num2 + " Não são multiplos!")
}
