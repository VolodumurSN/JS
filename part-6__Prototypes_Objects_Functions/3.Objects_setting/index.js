let ford = Object.create({
    calculateDistancePerYear: function() {
        console.log('Calculate' + 2018 - this.year)
    }
},{
    name: {
        value: 'Ford',
        enumerable: true,
        writable: false,
        configurable: false      //'name' not be deleted
    },

    model: {
        value: 'Focus',
        enumerable: true,
        writable: false,
        configurable: false


    },

    year: {
        value: '2013',
        enumerable: true,
        writable: false,
        configurable: false


    },

    distance: {
        value: '100233',
        enumerable: true,
        writable: true,
        configurable: false

    },
    age: {
        enumerable: false,
        writable: false

    }
})

console.log(ford)