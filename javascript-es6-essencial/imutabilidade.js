const user = {
    name: 'Andressa',
    lastName: 'Miki'
}

function getUserWithFullName(user){
    return {
        ...user, //Spread operator
        fullName: `${user.name} ${user.lastName}` //String literal 
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);


const students = [
    {
        name: 'Andressa',
        grade: 8
    },
    {
        name: 'Eliane',
        grade: 9
    },
    {
        name: 'Alessandra',
        grade: 5
    }
];

function getApprovedStudents(studentsList){
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovados');
console.log(getApprovedStudents(students));