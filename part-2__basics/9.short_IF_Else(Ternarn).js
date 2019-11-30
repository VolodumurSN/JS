let currentYear = 2019
let carName = 'Ford'
let carYear = 2008
let carAge = currentYear - carYear

if (carAge < 5) {
    console.log(carName + ' younger 5 year')
} else if (carAge >= 5 && carAge <= 10) {
    console.log(carName + ' oldest 5 year and younger 10 year')
} else {
    console.log(carName + ' = ' + carAge + ' years')
}



let personAge = 17;

let message = personAge < 18
    ? 'Person is yonger'
    : 'Person is oldest'

console.log(message)