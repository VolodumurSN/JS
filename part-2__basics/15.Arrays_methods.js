let cars = ['Ford', 'Mazda', 'Kia', 'BMW']
console.log(cars)
console.log(cars[2])

console.log(cars.length)

// add to end
cars.push('Audi')
console.log(cars)

// delete and return last
let audi = cars.pop()
console.log(cars, audi)

// delete and return first 
let ford = cars.shift()
console.log(cars, ford)

// add to start 
cars.unshift(audi)
console.log(cars)

let index = cars.indexOf('Kia')
let kia = cars[index]

console.log(kia)