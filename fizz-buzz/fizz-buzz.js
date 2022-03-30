let fizz = 0; 
let buzz = 0; 
let fizzBuzz = 0;

for (let i = 1; i < 1001; i++) {
    if (((i % 3) == 0) && ((i % 5) == 0)) {
        console.log(i + ' fizz buzz');
        fizzBuzz++;
    } else if ((i % 3) == 0) {
        console.log(i + ' fizz');
        fizz++;
    } else if ((i % 5) == 0) {
        console.log(i + ' buzz');
        buzz++;
    } else {
        console.log(i);
    }
}

console.log('There were ' + fizz + ' fizz\'s, ' + buzz + ' buzz\'s, and ' + fizzBuzz + ' fizz buzz\'s out of 1000');