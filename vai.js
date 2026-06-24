let alunos = ["Ana", "Raimundo", "Carlos", "Roberto", "Mario"];

let notas = [8, 7, 10, 6, 9];


console.log(alunos);
console.log(alunos[3]);
console.log(alunos[0]);

alunos[2] = "Ana";
console.log(alunos);

for (let cont = 0; cont < 5; cont++) {
    console.log(`Aluno(a) ${cont + 1}: ${alunos[cont]}`);
}

console.log(notas);
console.log(notas[2]);

for (let cont = 0; cont < alunos.length; cont++) {
    console.log(`Nome: ${alunos[cont]} - Nota: ${notas[cont]}`);
}

console.log(alunos.length);

for (let cont = 0; cont < alunos.length; cont++) {
    console.log(`Aluno(a) ${cont + 1}: ${alunos[cont]}`);
}

for (let aluno of alunos) {
    console.log(`Nome: ${aluno}`);
}

console.log(`Nome: ${aluno}`);


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

//orde decrescente

numeros.sort((a, b) => b - a);