const fs = require('fs')

const data = `
    Hello from nodeJS
`

fs.writeFileSync('nodejs.txt', data)    //Створення файлу

const result = fs.readFileSync('nodejs.txt', {encoding: 'utf-8'})

console.log(result)

console.log(__dirname) //Повний шлях до папки
console.log(__filename) //Повний шлях до файлу
