const users = ['Andressa','Eliane', 'Mario'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Andressa',
        age: 25,
        gender: gender.WOMAN
    },
    {
        name: 'Mario',
        age: 57,
        gender: gender.MAN
    },
    {
        name: 'Eliane',
        age: 47,
        gender: gender.WOMAN
    },
]

// Retornar a quantidade de itens de um array
console.log('Itens:',persons.length);

// Verificar se é array
console.log('A variável persons é um array:', Array.isArray(persons));

// Iterar os itens do arrays
persons.forEach((person, index,arr) =>{
    console.log(`Nome: ${person.name} index: ${index}` , arr);
});

//Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens:',mens);

//Retornar um novo
const personWithCouse = persons.map(person => {
    person.couse = 'Introdução ao Javascript';
    return person;
});
console.log('\nPessoas com a adição do course:', personWithCouse);

//Transformar um array em outro tipo
const totalAge = persons.reduce((age,person) => {
    age += person.age;
    return age;
}, 0);
console.log('\nSoma de idade das pessoas', totalAge);

// Juntando operações 
const totalEventAges = persons.filter(person => person.age % 2 !== 0) //resto divisão
                        .reduce((age,person) => {
                            age += person.age;
                            return age;
                        },0)
console.log('\nSoma de idades das pessoas que possuem idade impar' , totalEventAges);
