// Objects
const person = {
    name: 'Vova',
    age: 21,
    job: 'Frontend'
}

const op = new Proxy(person, {
    get(target, prop) {
        // console.log(`Getting prop ${prop}`)
        if (!(prop in target)) {
            return prop  // op.name_age_job => Vova 21 Frontend
                .split('_')
                .map(p => target[p])
                .join(' ')     
        }
        return target[prop]
    },
    set(target, prop, value) {
        if(prop in target) {
            target[prop] = value
        } else {
            throw new Error(`No ${prop} field in target`)
        }
    },
    has(target, prop) {
        return ['age', 'name', 'job'].includes(prop) // 'name2' in op => false
    },
    deleteProperty(target, prop) { 
        console.log('Deleting', prop)
        delete target[prop]
        return true // delete op.age => Deleting... age true
    }
})

// Functions
const log = text => `Log: ${text}`

const fp = new Proxy(log, {
    apply(target, thisArg, args) {
        console.log('Calling fn...')
        
        return target.apply(thisArg, args).toUpperCase()  // fp('vova') => "VOVA"
    }
})

//Classes
class Person {
    constructor (name, age) {
        this.name = name
        this.age = age
    }
}

const PesonProxy = new Proxy(Person, {
    construct(target, args) {
        console.log('Construct...')

        return new Proxy(new target(...args), {
            get(t, prop) {
                console.log(`Getting prop "${prop}"`)
                return t[prop]
            }
        })
    }
})

const p = new PesonProxy('Vova', 21) // p.name => Gettin prop "name" "Vova"
