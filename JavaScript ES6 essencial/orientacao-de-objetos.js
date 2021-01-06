// define a classe Pessoa
function Pessoa() {}

Pessoa.prototype.caminhar = function(){
  console.log ('Estou Caminhando!');
};
Pessoa.prototype.dizOi = function(){
  console.log ('Oi!');
};

// define a classe  Estudante
function Estudante() {
  // Chama o método pai
  Pessoa.call(this);
}

// herda de Pessoa
Estudante.prototype = new Pessoa();

// corrige o ponteiro construtor, que aponta para Pessoa
Estudante.prototype.constructor = Estudante;

// adiciona o método dizOi
Estudante.prototype.dizOi = function(){
  console.log('Oi, eu sou estudante');
}

// adiciona o método dizTchau
Estudante.prototype.dizTchau = function(){
  console.log('tchau');
}

var estudante1 = new Estudante();
estudante1.dizOi();
estudante1.caminhar();
estudante1.dizTchau();

// checa a herança
console.log(estudante1 instanceof Pessoa); // true
console.log(estudante1 instanceof Estudante); // true