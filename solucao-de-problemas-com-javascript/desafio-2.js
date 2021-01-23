// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar

/*

Desafio
Desde o Gerador de Improbabilidade Infinita, muitos nem questionam sobre vidas extraterrestres, e se aprofundam em questionamentos mais improváveis, como, por exemplo, será que seres de outros planetas usam os mesmos caracteres que nós para se comunicarem? E se isso for verdade, será que usam as mesmas letras vogais que a gente? Pensando nisso, vários cientistas criaram inúmeros tipos de alfabetos alienígenas, usando as letras do nosso alfabeto, além dos dígitos, de 0 a 9, com as suas respectivas vogais. Baseados nisto, eles querem a sua ajuda para identificar vogais em alfabetos alienígenas e realizar a contagem.

Escreva um programa que, dado uma sequência de vogais, em um determinado alfabeto alienígena, contabilize, em um texto escrito com o mesmo alfabeto, quantas vogais o mesmo possui.

Entrada
Haverá diversos casos de teste. Cada caso de teste é formado por duas linhas. A primeira linha informa uma palavra, formada por todas as vogais alienígenas de um determinado planeta. A segunda linha contém uma frase formada por letras do mesmo alfabeto. A entrada termina com fim de arquivo.
*/

let vogais = gets();
let frase = gets();

while (vogais !== "") {
  countChar(vogais, frase);
  vogais = gets();
  frase = gets();
}

function countChar(vogais, frase) {
  let count = 0;
  vogais.split("").map(vogal => {
    frase.split("").map(letra => {
      if (vogal === letra) {
        count++;
      }
    });
  });
  console.log(count);
}