console.log(42)
console.log(-42)
console.log(1.5)
console.log(-8 / 3) // 2.6666
console.log(0xAB)
console.log(2e3) // 2000
console.log(NaN) // not a number
console.log(typeof NaN) 
console.log(123 / 0)

let numb = 42
let delta = 8 / 3

console.log(numb.toString())
console.log(+delta.toFixed(1) + 4)
console.log(parseFloat(delta.toFixed(2))) // 2.67
console.log(parseInt(delta.toFixed(2))) // 2

console.log(isNaN(NaN))
console.log(isNaN(45))

console.log(isFinite(1 / 0)) // false 
console.log(isFinite(999)) // true