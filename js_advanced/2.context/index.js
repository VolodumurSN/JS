
function hello() {
    console.log('Hello', this);
}

/* hello() */

const person = {
    name: 'Vova',
    age: 25,
    sayHello: hello, //have person context
    /* sayHelloWindow: hello.bind(window) //have window context */
    logInfo(phone) {
        console.group(`${this.name} info: `)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd();
    }
}

const liza = {
    name: 'Liza',
    age: 22
}

person.logInfo.bind(liza, '09987976')()
person.logInfo.call(liza, '09987976')
person.logInfo.apply(liza, ['09987976'])

/// =========

const array = [10, 15, 20, 2, 3]
/* 
function multBy(arr, n) {
    return arr.map(i => i * n)
}
 */

Array.prototype.multBy = function (n) {
    return this.map(i => i * n)
}
console.log(array.multBy(2))