// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar


/*

Desafio
Crie um programa onde você receberá valores inteiros não negativos como entrada.

Ordene estes valores de acordo com o seguinte critério:

Primeiro os Pares
Depois os Ímpares
Você deve exibir os pares em ordem crescente e na sequência os ímpares em ordem decrescente.

Entrada
A primeira linha de entrada contém um único inteiro positivo N (1 < N < 10000) Este é o número de linhas de entrada que vem logo a seguir. As próximas N linhas terão, cada uma delas, um valor inteiro não negativo.

*/


let totalItems = gets();
let itemsPares = [];
let itemsImpares = [];
let numeroAlt = 0;
let numeroItem = 0
for (let i = 0; i < totalItems; i++) {
    numeroItem = gets();
    numeroAlt = parseFloat(numeroItem) %  2;
    if(parseInt(numeroAlt) == 0){
      itemsPares.push(numeroItem);
    }else{
      itemsImpares.push(numeroItem);
    }
}

itemsImpares =   itemsImpares.sort(function(a, b){return b-a});
itemsPares =   itemsPares.sort(function(a, b){return a-b});

for (let i = 0; i < itemsPares.length; i++) {
  console.log(itemsPares[i]);
}

for (let i = 0; i < itemsImpares.length; i++) {
  console.log(itemsImpares[i])
}

