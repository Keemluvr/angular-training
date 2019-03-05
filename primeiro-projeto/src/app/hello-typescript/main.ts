//Declarar variável no javascript puro
var minhaVar = 'minha variavel';

function minhaFuncao(x, y) {
    return x + y;
}

//ES6 ou ES2015
let num = 2
const PI = 3.14


//Javascript puro
var numeros = [1, 2, 3]
numeros.map(function(valor) {
    return valor * 2
})

//Arrow function
let a = numeros.map( valor => valor * 2)
console.log (a)

//Classe
class Matematica {
    soma(x, y){
        return x + y
    }
}

var n1: string = 'sdfsdf'