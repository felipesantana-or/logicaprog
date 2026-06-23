/* Desenvolver um programa que mostre o menu de opções da tabela abaixo e peça o código desejado. Mostre
como resposta uma mensagem confirmando a escolha do usuário, ou que o número digitado não existe no
menu de opções.
Código Opção
1 Incluir
2 Alterar
3 Excluir
4 Pesquisar
5 Sair
*/


console.log("Menu de opcões: ");
console.log("Código - Opção");
console.log("1    - incluir");
console.log("2    - alterar");
console.log("3    - excluir");
console.log("4    - Pesquisar");
console.log("5    - sair");
console.log("Informe o código não referente á ação desejada:  ");
cod = 10;
console.log (`Codigo inserido: ${cod}`);

switch ( cod ) {
     case 1: 
     console.log("Você selecionou 1 - Incluir ");
     break;

     case 2: 
     console.log("Você selecionou 2 - Incluir ");
     break;

     case 3: 
     console.log("Você selecionou 3 - Incluir ");
     break;

     case 4: 
     console.log("Você selecionou 4 - Incluir ");
     break;

     case 5: 
     console.log("Você selecionou 5 - Incluir ");
     break;

     default:

     console.log("ERRO: Código informado não é válido ");
     break;





}

