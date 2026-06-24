//declarando um obejeto chamado aluno em (typescript)


let aluno: {

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


// exemplo notação de conchetes


let propriedades = "nome"

console.log(aluno[propriedades]);//

//também funciona diretamente

console.log(aluno["idade"]);

//declarando novo objeto 

    let produto {

    nome: "Notebook",
    preco: 3000
    

    };

    console.log( produto);

    //modificando o preço do notebook

    produto.preco = 2888

    console.log( produto);


    //adicionar uma propriedade (uma nova chave)

    produto.estoque = 15;

