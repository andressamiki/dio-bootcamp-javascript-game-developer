// Tipagem dinamica 

var minhaVariavel = 30;
minhaVariavel = 'teste';

console.log(minhaVariavel);

// Tipagem

var Greeter = (function(){
    function Greeter(message){
        this.greeting = message;
    };
    Greeter.prototype.greet = function (){
        return "Hello, " + this.greeting;
    };
    return Greeter;
})

// Funções
 function getName(){
     return "Andressa de Souza Miki";
 }

 //recebe função e retorna
 function logFn(fn){
     console.log(fn());
 }

 //atribuindo função
 const logoFnResult = logFn;

 //passando função por argumento
 logoFnResult(getName);

