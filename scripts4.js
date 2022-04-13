/*
3) Elaborar um algoritmo que informe se um ano informado pelo usuário é bissexto ou não.
*/

var ano = parseInt(prompt("Digite algum ano: "));

var calc = ano % 4;

if (calc === 0){
    alert("O ano " + ano + " é Bissexto!")
} else {
    alert("O ano " + ano + " não é Bissexto!")
}