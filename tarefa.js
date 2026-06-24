//Desenvolver um programa que apresente no final a soma dos 
// valores pares existentes na faixa de 3 até 21.

let acum = 0
for (let cont = 3; cont <= 21; cont++  ){

if (cont % 2 === 0) 


{ acum += cont; }

}





console.log(`A soma dos valores de 3 até 21 é: ${acum}`);