/* const person = new Object ({
    name: 'Maxim',
    age: 25,

    greet() {
        console.log('Greet!')
    }
}) */

const person = {
    name: 'Maxim',
    age: 25,

    greet() {
        console.log('Greet!')
    }
}

Object.prototype.sayHello = () => console.log('Hello')
person.sayHello()

const liza = Object.create(person)
liza.sayHello()
console.log(liza.name)
liza.name = 'Liza'
console.log(liza.name)

const str = new String('I\'m string')
const str = 'I\'m string'
console.log(str)
str.sayHello()


