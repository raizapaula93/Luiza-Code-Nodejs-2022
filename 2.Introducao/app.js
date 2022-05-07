import {adicao,sub} from './lib/tudo';



// const read = require('readline-sync')

// const operacao = read.question("O que deseja fazer? somar/subtrair/multiplicar/dividir ")

const add = tudo.adicao(8,10)
console.log("Soma =>", add);

const subtrai = tudo.sub(8,10)
console.log("Subtrai =>", subtrai);

// switch (operacao) {
//     case 'somar':
//         var funcSoma = require('./lib/adicao')
//     break
//     case 'subtrair':
//         var funcSub = require('./lib/sub')
//     break
//     case 'multiplicar':
//         var funcMulti = require('./lib/mult')
//     break
//     case 'dividir':
//         var funcDiv = require('./lib/divi')
//     break
//     default:
//         console.log(`Escolha uma opção válida.`)
// }