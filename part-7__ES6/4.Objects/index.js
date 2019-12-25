/* const createCar = (name, model) => {
    return {name, model}
}
const ford = createCar('Ford', 'Focus')
console.log(ford)
 */




// =>({}) - arrow function return object
const createCar = (name, model) => ({name, model})

const ford = createCar('Ford', 'Focus')
console.log(ford)





const bmwYearField = 'year'

const bmw = {
    name: 'Ford',
    [bmwYearField]: 2018,

    /* logFields: function() {
        console.log(this.name, this.year)
    } */
    logFields() {
        const {name, year} = this
        console.log(name, year)
    }
}

bmw.logFields()




const {year} = bmw
console.log(year)
