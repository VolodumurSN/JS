function Array(ownArray) {
    this.ownArray = ownArray
}

Array.prototype.powArray = function () {

    let arrayToPow = this.ownArray


    return arrayToPow.map(function(i) { 
        
        if (typeof i === 'string') {
            return i.repeat(2)
        }
        else{
            return Math.pow(i, 2) 
        }

    })
}


let firstArray = new Array([1, 2, 3])
let secondArray = new Array([5, 'Hello', 6])

console.log(firstArray.powArray())
console.log(secondArray.powArray())

