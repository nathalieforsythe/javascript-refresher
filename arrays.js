const students = ['Alea', 'Katie', 'Masha', 'Annie', 'Mattea', 'Nathalie'];
console.log(students);

students.push('Crissy');
console.log(students);

for (let i = 0; i < students.length; i++){
    console.log(students[i]);
}

for (let student of students){
    console.log(student);
}

console.log(students.sort());

students[6] = 'Nathalie Forsythe';
console.log(students);