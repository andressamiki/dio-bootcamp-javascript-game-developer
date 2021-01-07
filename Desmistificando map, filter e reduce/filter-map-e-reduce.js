const pets = [
    {
        name: "Isaias",
        type: "dog",
        age: 9,
        peso: 15
    },
    {
        name: "Josué",
        type: "cat",
        age: 5,
        peso: 3
    },
    {
        name: "Oscar",
        type: "fish",
        age: 1,
        peso: 0.01
    },
    {
        name: "Maria",
        type: "horse",
        age: 22,
        peso: 200
    },
]

const ehMenorQueSeis = (numero) => {
    return numero < 6
}

const youngPets = pets.filter(({age}) => ehMenorQueSeis(age))

const youngPets2 = pets.filter((pets) => ehMenorQueSeis(pets.age));

const petNames = pets.map((pet) => {
    return pet.name + ' ' + pet.age
})

console.log(pets)
console.log(youngPets)
console.log(youngPets2)
console.log(petNames)

//Reduce para trazer a soma das idades
const totalAge = pets.reduce((total, pet) => {
    console.log(`Total: ${total}`)
    console.log(`Pet: ${pet.name}`)

    return total + pet.age
}, 0)

console.log("A soma das idades dos animais é igual a " + totalAge)

//Reduce para trazer a média do peso
const avgPeso = pets.reduce((avg, pet) => {
    console.log(`Total: ${avg}`)
    console.log(`Pet: ${pet.name}`)

    return avg + (pet.peso/pets.length)
}, 0)

console.log("A média do peso dos animais é igual a " + avgPeso.toFixed(2))

// Aqui, mostro como usar o reduce para trazer mais de um objeto
const totalAgePeso = pets.reduce((total, pet) => {
    return{
        totalAge: total.totalAge + pet.age,
        totalPeso: total.totalPeso + pet.peso
    }
}, {totalAge: 0, totalPeso: 0})

const avgAgePeso = pets.reduce((avg, pet) => {
    return{
        avgAge: avg.avgAge + pet.age/pets.length,
        avgPeso: avg.avgPeso + pet.peso/pets.length
    }
}, {avgAge: 0, avgPeso: 0})

console.log(totalAgePeso)
console.log(avgAgePeso)

//Utilizando o reduce com condicionais
const somaPesoPesado = pets.reduce((soma, pet) => {
    if(pet.peso < 50) return soma

    return soma + pet.peso
}, 0)

console.log("A soma dos pesos dos animais acima de 50kg é igual a " + somaPesoPesado)

//Encadeando o filter com o reduce
const pesoYoungPets = pets
    .filter((pet) => {
        return pet.age < 10
    })
    .reduce((total, pet) => {
        return total + pet.peso
    }, 0)

console.log("A soma dos pesos dos animais abaixo de 10 anos é igual a " + pesoYoungPets)
