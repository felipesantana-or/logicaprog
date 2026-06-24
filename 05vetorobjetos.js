//material 07 - págiona 16


//declarando um vetor (ou array) de obejetos "aluno"

let alunos = [

{nome: "Ana", idade: 18, ativo: true},
{nome: "Carlos", idade: 22, ativo: false},
{nome: "Maria", idade: 20, ativo: true}

];

console.log(alunos);

//acessando pelo indice + propriedade

console.log(`nome do primeiro aluno(A): ${alunos[0]}`);

console.log(`todos os dados do primeiro aluno: ${alunos[0]}`);


//percorrendo o vetor de objetos com for clássico

for(let cont = 0; cont < alunos.length; cont++ ){

   console.log(`nome: ${ alunos[cont].nome}`);
   console.log(`idade: ${ alunos[cont].idade}`);
   console.log(`ativo: ${ alunos[cont].ativo}\n`);


}

//percorrendo o corredor de objetos com for of

for (let aluno of alunos ){
    
     console.log(`nome: ${aluno.nome}`);
     console.log(`idade: ${aluno.idade}`);
     console.log(`ativo: ${aluno.ativo} \n `);

    }






   