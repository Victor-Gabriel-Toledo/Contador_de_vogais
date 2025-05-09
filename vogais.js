let palavras = "O rato roeu a roupa do rei de roma"
let vogais = ["a", "e", "i", "o", "u"]

let grupo = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0
}

for (let palavra of palavras) {
    for (let letra of palavra.toLowerCase()) {
        if (vogais.includes(letra)) {
            grupo[letra]++
        }
    }
}

console.log("Contagem de vogais:")
console.log(grupo)