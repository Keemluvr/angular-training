//Declarar variável no javascript puro
var minhaVar = 'minha variavel';
function minhaFuncao(x, y) {
    return x + y;
}
//ES6 ou ES2015
var num = 2;
var PI = 3.14;
//Javascript puro
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
//Arrow function
var a = numeros.map(function (valor) { return valor * 2; });
console.log(a);
//Classe
var Matematematica = /** @class */ (function () {
    function Matematematica() {
    }
    Matematematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematematica;
}());
