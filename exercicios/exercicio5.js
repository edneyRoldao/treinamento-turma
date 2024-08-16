// 5 - receba um nome e transforme a primeira letra em maiusculo
let nome = process.argv[2] + ''

let resposta = ''
let proximaDeveSerMaiuscula = true

for (let index = 0; index < nome.length; index++) {
    let letra = nome.charAt(index)

    if (proximaDeveSerMaiuscula) {
        letra = letra.toUpperCase()        
    }

    if (letra == ' ') {
        proximaDeveSerMaiuscula = true
    } else {
        proximaDeveSerMaiuscula = false
    }

    resposta = resposta + letra
}

console.log(resposta);