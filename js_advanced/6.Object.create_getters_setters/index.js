const person = Object.create(
    {
        calculateAge() {
            console.log('Age:', new Date().getFullYear() - this.birthYear)
        }
    }, 
    {
        name: {
            value: 'Vova',
            enumerable: true,
            writable: true,
            configurable: true
        },
        birthYear: {
            value: 1998,
            enumerable: true,
            writable: false,
            configurable: false
        },
        age: {
            get() {
                return new Date().getFullYear() - this.birthYear
            },
            set(value) {
                document.body.style.background = 'red'
                console.log('Set age', value)
            }
        }
    }
)

person.name = 'Ivan'
person.birthYear = 2020

delete person.name
delete person.birthYear

for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`Key: ${key} value: ${person[key]}`)   
    }
}


