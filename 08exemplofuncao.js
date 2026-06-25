//material 08 (Indolarização e funções) - pag 06

let num; //variável GLobal

function somar (a, b){

let resultado = a + b;
return resultado; 

}

direcionador();
//exibindo imediatamente o valor retornado pela função

console.log( somar (5, 3));  // resultado -> 


// guardando o valor retornado em uma varialvel

num = somar (10, 20);
console.log( num);


somar (4, 5);

function direcionador (){

    console.log("Siga em frente! Estude sempre! ");

}

//chamando um direcionador

direcionador();
direcionador();

let texto = direcionador();
console.log (texto ); // está variável não recebe o retorno da função

function mensagem (){
      
    return "Ame mais, brigue menos"

}

//chamando a função mensagem ()

mensagem(); //perdi o return da funçaõ
console.log(mensagem () );

let cont // global

for ( cont = 0; cont <= 3 ; cont++) {

         console.log( cont );

}

direcionador();
console.log( cont ); 


