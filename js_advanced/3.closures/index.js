/* 
function createIncrementor(n) {
    return function (num) {
        return console.log(n + num)
    }
}

const addOne = createIncrementor(1)
const addTen = createIncrementor(10)

addOne(10)
addOne(11)

addTen(10)
addTen(11)

 */

/// =========

/* 
function urlGenerator(domain) {
    return function (url) {
        return console.log(`https://${url}.${domain}/`)
    }
}

const comUrl = urlGenerator('com')
const uaUrl = urlGenerator('ua')

comUrl('google')
comUrl('lg')

uaUrl('prom')
uaUrl('hotline')
 */

/// =========   My own bind function


function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

function bind(context, fn) {
    return function (...args) {
        fn.apply(context, args)
    }
}


const person1 = {name: 'Vova', age: 21, job: 'Frontend'}

bind(person1, logPerson)()