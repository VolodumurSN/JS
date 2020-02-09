// function* strGenerator() {
//     yield 'H'
//     yield 'e'
//     yield 'l'
//     yield 'l'
//     yield 'o'
// }
// const str = strGenerator() // str.next() => {value: H, done: false}; str.next() ...

// function* numberGen(n = 10) {
//     for (let i = 0; i < n; i++) {
//         yield i    
//     }
// }
// const num = numberGen(7)  // num.next() => {value: 1, done: false}; str.next() ...

// const iterator = {
//     generate(n = 10) {
//         let i = 0

//         return {
//             next() {
//                 if (i < n) {
//                     return { value: ++i, done: false }
//                 }
//                 return { value: undefined, done: true }
//             }
//         }
//     }
// }

// const itr = iterator.generate() // itr.next() => {value: 1, done: false}; itr.next() ...


// for (let i of 'hello') {
//     console.log(i)
// }

// for (let i of [1, 1, 2, 3, 5, 8, 13]) {
//     console.log(i)
// }


function* iter(n) {
    for (let i = 0; i < n; i++) {
        yield i    
    }
}

for (let k of iter(6)) {
    console.log(k)
}