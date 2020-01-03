const _ = require('lodash')

const users = require('./users.json')

const output = _(users)
    .filter(u => u.id < 7)
    .countBy(u => u.address.city)
    .toPairs()
    .map(u => _.zipObject(['city', 'users'], u))
    .orderBy(u => u.users, 'asc')
    .take(2)
    .value()

console.log(output)


// ==============

