// PALINDROMO
/*
    Um palíndromo é uma palavra ou frase que pode ser lida no seu sentido normal, da esquerda 01
    para a direita, bem como no sentido contrário, da direita para a esquerda, sem que haja mudança 
    nas palavras que a formam e no seu significado.
*/
let palavra = process.argv[2] + ''
let palavraInvertida = ''

for (let index = palavra.length - 1; index >= 0; index--) {
    palavraInvertida = palavraInvertida + palavra.charAt(index)
}

console.log(palavra == palavraInvertida);