let alunos = ["Ana", "Raimundo", "Carlos", "Roberto", "Mario"];
let notas = [8, 7, 10, 6, 9];

// Exibindo o vetor completo
console.log(alunos);
console.log(alunos[3]);
console.log(alunos[0]);

// Alterando um elemento
alunos[2] = "Ana";
console.log(alunos);

// Percorrendo com for
for (let cont = 0; cont < alunos.length; cont++) {
    console.log(`Aluno(a) ${cont + 1}: ${alunos[cont]}`);
}

// Exibindo notas
console.log(notas);
console.log(notas[2]);

// Exibindo alunos e notas
for (let cont = 0; cont < alunos.length; cont++) {
    console.log(`Nome: ${alunos[cont]} - Nota: ${notas[cont]}`);
}

// Tamanho do vetor
console.log(alunos.length);

// For clássico
for (let cont = 0; cont < alunos.length; cont++) {
    console.log(`Aluno(a) ${cont + 1}: ${alunos[cont]}`);
}

// For...of
for (let aluno of alunos) {
    console.log(`Nome: ${aluno}`);
}

// forEach
alunos.forEach(function(aluno, indice) {
    console.log(`Índice: ${indice}, Aluno: ${aluno}`);
});

// PUSH - adiciona no final
alunos.push("Raimundo");
console.log(alunos);

// POP - remove do final
alunos.pop();
console.log(alunos);

// UNSHIFT - adiciona no início
alunos.unshift("Raimundo");
console.log(alunos);

// SHIFT - remove do início
alunos.shift();
console.log(alunos);

// Vetor de números para ordenação
let numeros = [5, 2, 8, 1, 9];

// Ordem crescente
numeros.sort((a, b) => a - b);
console.log("Crescente:", numeros);

// Ordem decrescente
numeros.sort((a, b) => b - a);
console.log("Decrescente:", numeros);


