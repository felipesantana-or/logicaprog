//Desenvolver um programa que pergunte um número e exiba a informação de que ele é positivo, negativo ou
//nulo.


let num ;
console.log("Informe um numero: ");
num = 10;
console.log(`Número informado: ${num}`);

if (num > 0 ) {

   console.log(`${num} é positivo`);

} else if ( num < 0 ) {

console.log.(`${num} é negativo `);

} else{

console.log(`${num} é nulo `);

}


//declarando um obejeto chamado aluno em (typescript)


let aluno: { nome: string; idade: number; ativo: boolean} = {

   nome: "João",
   idade: 20,
   ativo: true
  
};

console.log(aluno); // exibe o objeto completo

console.log(`Nome do aluno ${aluno.nome}`);
console.log(`Idade: ${aluno.idade}`);
console.log(`Situação ${aluno.ativo}`);

if (aluno.ativo === true){

console.log("Situação: Ativo");

} else {


console.log("Situação: Inativo");


}


