//Assunto: Vetores



//vetor com nome de alunos

let alunos =  ["Ana" , "Raimundo" , "Carlos" , "Roberto" ]

let notas = [8, 7, 10, 6, 9];

console.log(alunos);  //exibe os dados do valor todo
console.log(alunos[3]);
console.log(alunos[0]);

//vetor com números
let numeros =[6, 23, -7, 18, 4, 92, 15, 33, 0, 50];


alunos[2] = "Ana";
console.log(alunos); // vetor todo (AGora com a Ana)

for (let cont = 0 ; cont < 5; cont++ ){

console.log(`Aluno (a) ${cont + 1} : ${alunos [cont]}`);


}

//exibindo todas as notas

console.log (notas)
console.log(notas [2]); 

for (let cont = 0 ; cont < 4; cont++ ) {

console.log( `Nome: ${alunos[cont]} - nota ${alunos[cont] }`);
}
console.log (alunos.length ); // Tamanho do vetor : 4


//exemplo for clássico
for (let cont = 0 ; cont < alunos.length; cont++) {

console.log(`Alunos (a) ${con + 1} : ${alunos [cont]}`);

}

//exemplo com for of 

for (let aluno of alunos ) {

console.log(`Nome: ${aluno}`);

}

//exemplo foreach

alunos.forEach(function(aluno, indice ) {

  console.log(`índice: ${indice}, aluno: ${aluno}`);

});

// métodos push, unshift, pop e shift
// push - adiciona ao final do vetor

alunos.push("Raimundo");
console.log(alunos);

//pop - remove do final do vetor

alunos.pop();
console.log(alunos);

alunos.unshift("Raimundo")

// shift 

aluno.shift()
console.log(alunos);

//ordem crescente
numeros.sort((a , b) => a - b)