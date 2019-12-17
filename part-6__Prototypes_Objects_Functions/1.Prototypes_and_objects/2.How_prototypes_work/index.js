

function Car(name, year) {
    this.name = name
    this.year = year
}


Car.prototype.getAge = function() {     //function(class) 'Car' have method getAge()  
    return new Date().getFullYear() - this.year
}



let audi = new Car('Audi', 2003);
let mazda = new Car('Mazda', 2013);

console.log(audi.getAge())
console.log(mazda.getAge())     //Have access for method getAge of class Car