// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar

/*

Desafio
Crie um algoritmo para ordenar um conjunto de palavras pelo seu tamanho. Seu programa deve receber um conjunto de palavras e retornar este mesmo conjunto ordenado pelo tamanho das palavras decrescente, se o tamanho das palavras for igual, deve-se ordernar por ordem alfabética.

Entrada
A primeira linha da entrada possui um único inteiro N, que indica o número de casos de teste. Cada caso de teste poderá conter de 1 a 50 palavras inclusive, e cada uma das palavras poderá conter entre 1 e 50 caracteres inclusive. Os caracteres poderão ser espaços, letras, ou números.
*/

let casos = gets();
let palavras = [];

for(let i=0; i<casos; i++){
  palavras.push(gets().split(" "));
}

for(let i=0; i<casos; i++){
  palavras[i].sort((a, b) => {
    if(a.length > b.length){
      return 1;
    }
    else{
      if(a.length === b.length){
        if(a < b){
          return 1
        }
        else{
          return -1;
        }
      }
      else{
        return -1;
      }
    }
  }).reverse();
}

let aux = "";
for(let i=0; i<palavras.length; i++){
  let valor = "";
  for(let j=0; j<palavras[i].length; j++){
    if(j<=palavras[i].length-1){
      aux= " ";
    }
    else{
      aux="";
    }
    valor+=palavras[i][j] + aux;
  }
  console.log(valor);
}