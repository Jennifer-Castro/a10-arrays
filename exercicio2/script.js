// // # Exercício 2

// // Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

let arrayNum = [7,15,13,11]
let arrayGatas = ["Madalena","Mel","MinnieMay","Aurora"]
let arrayTudoJuntoEMisturado = [18, true, "Jennifer"]
console.log(arrayNum)
console.log(arrayGatas)
console.log(arrayTudoJuntoEMisturado)

// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);

console.log('A qtde de itens no 1 é:', arrayNum.length)
console.log('A qtde de itens no 2 é:', arrayGatas.length)
console.log('A qtde de itens no 3 é:', arrayTudoJuntoEMisturado.length)


// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;

console.log(arrayNum[0])
console.log(arrayGatas[1])
console.log(arrayTudoJuntoEMisturado[2])


// - Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.


console.log(arrayNum.includes(15))
console.log(arrayTudoJuntoEMisturado.includes("Luna"))
