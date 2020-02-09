const people = [
    { name: 'Vova', age: 21, budget: 2000 },
    { name: 'Ivan', age: 23, budget: 20000 },
    { name: 'Max', age: 17, budget: 1000 },
    { name: 'Alex', age: 25, budget: 6000 },
    { name: 'Nazar', age: 30, budget: 8000 },
    { name: 'Oleg', age: 16, budget: 500 },
]

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i])
// }

// for (const value of people) {
//     console.log(value)
// }


// ========= ForEach
// people.forEach((value, index, array) => {
//     return console.log(value)
// })
//
// people.forEach(value => console.log(value))


// ========= Map
// const newPeople = people.map((value, index, array) => value)
// console.log(newPeople)
//
// const newPeople = people.map(value => `${value.name}, ${value.age * 3}`)
// console.log(newPeople)


// ========= Filter
// let adults = []
// for (let i = 0; i < people.length; i++) {
//     if(people[i].age >= 18) {
//         adults.push(people[i])
//     }
// }
// console.log(adults)
//
// const adults = people.filter((value, index, array) => {
//     if (value.age >= 18) {
//         return true
//     }
// })
//
// const adults = people.filter(value => value.age >= 18)
// console.log(adults)


// ========= Reduce
// let amount = 0
// for (let i = 0; i < people.length; i++) {
//     amount += people[i].budget
// }
// console.log(amount)
//
// const amount = people.reduce((total, value) => {
//     return total + value.budget
// }, 0)
// console.log(amount)
//
// const amount = people.reduce((total, value) => total + value.budget, 0) // 0 - default value for total
// console.log(amount)


// ========= Find 
// const vova = people.find(value => value.name.toLowerCase() === 'vova')
// console.log(vova)


// ========= FindIndex
// const vovaIndex = people.findIndex(value => value.name.toLowerCase() === 'vova')
// console.log(vovaIndex)


// !!!========= 
// const newPeople = people
//     .filter(value => value.budget > 2000)
//     .map(value => {
//         return {
//             info: `${value.name} (${value.age})`,
//             budget: value.budget
//         }
//     })
//     console.log(newPeople)

// const budget = newPeople.reduce((total, value) => total + value.budget, 0)

// console.log(budget)