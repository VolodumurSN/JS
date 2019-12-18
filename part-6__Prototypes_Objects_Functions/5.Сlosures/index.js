let createCounter = function (counterName) {
    let counter = 0
    return{
        increment: function () {
            counter++
        },
        decrement: function () {
            counter--
        },
        getCounter: function () {
            return counter
        }
    }
}

let counterA = createCounter('Counter A')
let counterB = createCounter('Counter B')

counterA.increment()
counterB.decrement()

console.log(counterA.getCounter())
console.log(counterB.getCounter())