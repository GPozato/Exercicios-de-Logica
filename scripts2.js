/*
2) Elaborar um algoritmo que informe se um número informado pelo usuário é par ou ímpar.
*/

var num = parseInt(prompt("Digite qualquer numero: "));

var calc = num % 2;

if (calc === 0){
    alert(num + " é par!")
} else {
    alert(num + " é impar!")
}