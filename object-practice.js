const student1 = {firstName: 'Mattea', lastName: 'Jalal', gpa: 3.8, playsVolleyball: false};
// console.log(student1);
// console.log('I know ' + student1.firstName + ' ' + student1.lastName + '!');
// console.log(`I know ${student1.firstName} ${student1.lastName}!`); // literals remove concatenation

const student2 = {firstName: 'Nathalie', lastName: 'Forsythe', gpa: 2.1, playsVolleyball: true};
// console.log(student2);

if (student2.playsVolleyball) {
    // console.log(`${student2.firstName} ${student2.lastName} plays volleyball`);
} else {
    // console.log(`${student2.firstName} ${student2.lastName} doesn\'t play volleyball`);
}

const students = [];
students.push(student1, student2);
students.push({firstName: 'Katie', lastName: 'Gilberg', gpa: 3.7, playsVolleyball: true});
console.log(students);

console.log('I know ' + students[2].firstName + ' ' + students[2].lastName + '!');