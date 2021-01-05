function fn(){
    return 'Code here';
}

const arrowFn = () => 'Code here';
const arrowFn2 = () => { return 'Code here'} ;

//funções também são objetos 
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

//Receber parâmetros 
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//Receber e retornar funções
const controlFnExec = fnParam => allowed => {
    if(allowed){
        fnParam()
    }
}

const handledFnExecution = controlFnExec2(fn);

handledFnExecution(true);
handledFnExecution();

//controlFnExec como função
function controlFnExec2(fnParam){
    return function(allowed){
        if(allowed){
            fnParam();
        }
    }
}


//arrow function

(() => {
    this.name = 'arrow function';
    const getNameArrowFn = () => this.name;

    function getName(){
        return this.name;
    }

    const user = {
        name: 'Nome no objeto de execução',
        getNameArrowFn,
        getName //getName = getName
    }

    console.log(user.getNameArrowFn());
    console.log(user.getName())
})();
