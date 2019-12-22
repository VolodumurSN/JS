let firstArray = [1, 2, 3]
let secondArray = [5, 'Hello', 6]


Array.prototype.powArray = function () {    //Creating prototype 'powArray' in  Global Array 

    return this.map(function(item) { 
        
        if (typeof item === 'string') {
            return item.repeat(2)
        }
        if (typeof item === 'number'){
            return Math.pow(item, 2) 
        }

    })
}


let newFirstArray = firstArray.powArray()
let newSecondArray = secondArray.powArray()

console.log(newFirstArray)
console.log(newSecondArray)

