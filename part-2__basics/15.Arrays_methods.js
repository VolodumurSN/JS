var cars = ['Ford', 'Mazda', 'Kia', 'BMW']
console.log(cars)
console.log(cars[2])

console.log(cars.length)

// add to end
cars.push('Audi')
console.log(cars)

// delete and return last
var audi = cars.pop()
console.log(cars, audi)

// delete and return first 
var ford = cars.shift()
console.log(cars, ford)

// add to start 
cars.unshift(audi)
console.log(cars)

var index = cars.indexOf('Kia')
var kia = cars[index]

console.log(kia)