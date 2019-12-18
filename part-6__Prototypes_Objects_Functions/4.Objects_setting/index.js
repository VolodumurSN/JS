 let ford = Object.create({
    calculateDistancePerYear: function() {
        Object.defineProperty(this, 'distancePerYear', {
            value: this.distance / this.age,
            enumerable: false,      //hide Property      
            writable: false,
            configurable: false
        })
    }
},{
    name: {
        value: 'Ford',
        enumerable: true,
        writable: false,
        configurable: false      //'name' not be deleted. Defaults is false
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
        enumerable: true,
        configurable: false,
        get: function () {
            console.log('Take a year')
            return new Date().getFullYear() - this.year
        },
        set: function () {
            console.log('Set value')
        }
    }
})

ford.calculateDistancePerYear()


// Better method to show Properties and their values
 Object.keys(ford).forEach(key => {
    console.log(key, ford[key])
}); 


 
/* 
    // show Properties and their values

for (const key in ford) {
    if (ford.hasOwnProperty(key)) {
        console.log(key, ford[key])
    }
} */



/* 
    //Getter and Setter exemple

    let user = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    },
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    }
  };
   */