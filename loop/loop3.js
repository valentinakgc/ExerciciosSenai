//Leia 5 salários e informe a média.

// salarios = 5
// totalMedia = 1000
// for (i = 0; i < salarios; i++){
//     let salario1 = Math.random() * 10
//     let salario2 = Math.random() * 10
//     let salario3 = Math.random() * 10
//     let salario4 = Math.random() * 10
//     let salario5 = Math.random() * 10
//     let media = (salario1 + salario2 + salario3 + salario4 + salario5) /5
//     totalMedia += media
//     console.log("Salários [",
//                         salario1.toFixed(2),
//                         salario2.toFixed(2),
//                         salario3.toFixed(2),
//                         salario4.toFixed(2),
//                         salario5.toFixed(2),
//                         "], média:[",
//                         media.toFixed(2), "]"
//                         )
// }
// totalMedia = totalMedia /salarios
// console.log("Média de salários", totalMedia.toFixed(2));

totalSalario = 0
n = 5
for(i = 0; i < n; i++){
    let salario = Math.random()*10000
     totalSalario += salario
     console.log("I:", i+1, " salário: ", salario.toFixed(2));
}
media = totalSalario / n
console.log("Média de salários: ", media.toFixed(2));