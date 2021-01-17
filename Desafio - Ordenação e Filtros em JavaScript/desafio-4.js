// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados

/*

Desafio
O banco que você trabalha sempre tem problemas para organizar as filas de atendimento dos clientes.

Após uma reunião com a gerência ficou decidido que os clientes ao chegar na agência receberão uma senha numérica em seu aparelho de celular via sms e que a ordem da fila será dada não pela ordem de chegada, mas sim pelo número recebido via sms. A ordem de atendimento será decrescente: aqueles que receberam número maior deverão ser atendidos primeiro. 

Então, dada a ordem de chegada dos clientes reordene a fila de acordo com o número recebido via sms, e diga quantos clientes não precisaram trocar de lugar nessa reordenação.

Entrada
A primeira linha contém um inteiro N, indicando o número de casos de teste a seguir.

Cada caso de teste inicia com um inteiro M (1 ≤ M ≤ 1000), indicando o número de clientes. Em seguida haverá M inteiros distintos Pi (1 ≤ Pi ≤ 1000), onde o i-ésimo inteiro indica o número recebido via sms do i-ésimo cliente.

Os inteiros acima são dados em ordem de chegada, ou seja, o primeiro inteiro diz respeito ao primeiro cliente a chegar na fila, o segundo inteiro diz respeito ao segundo cliente, e assim sucessivamente.

*/

let cases = parseInt(gets()); 

for (let i = 1; i <= cases; i++) {
    let stillInPosition = 0; 
    let numCustomers = parseInt(gets());
    let arriving = (gets()).split(" ").map((arriving) => arriving);
    let stack = arriving.map((arriving) => arriving).sort(sortNum);

    function sortNum(a, b){
        return (b - a);
    }

    for (let j = 0; j < numCustomers; j++) {
        if ( arriving[j] === stack[j]) {
            stillInPosition++;
        };
    };
    console.log(stillInPosition);
};