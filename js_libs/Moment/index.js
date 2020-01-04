const now = moment()

now.set({
    month: 0,
    date: 4,
    hour: 14
})

now.add(2,'d')

console.log(now.format('D.MM.YYYY HH:mm:ss:SSS'))

console.log(now.second())
console.log(now.date())

