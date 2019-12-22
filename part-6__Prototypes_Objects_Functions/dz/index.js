function Array(ownArray) {
    this.ownArray = ownArray
}

Array.prototype.powArray = function () {

    let arrayToPow = this.ownArray


    return arrayToPow.map(function(i) { 
        
        return Math.pow(i, 2) 
    })
}


let firstArray = new Array([1, 2, 3])

console.log(firstArray.powArray())

