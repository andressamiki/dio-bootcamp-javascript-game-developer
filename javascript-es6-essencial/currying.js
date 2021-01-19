function soma(a,b){
    return a + b;
}

soma(2,3);
soma(2,4);
soma(2,5);
soma(2,6);

// para não repetir o primeiro parametro 
// Técnica que consiste em transformar a chamada de uma função que recebe múltiplos argumentos em uma avaliação de uma sequência de funções.
// Ato de chamar a função com menos parametros do que definido. 

function somaC(a){
    return function(b){
        return a + b;
    }
}

const soma2 = somaC(2);

console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));
console.log(soma2(6));