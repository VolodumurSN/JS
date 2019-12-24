/* function getAge(year) {
    const current = new Date().getFullYear()
    
    return current - year
}
 */


/* const calculateAge = (year) => {
    const current = new Date().getFullYear()
    
    return current - year
} 
 

const calculateAge = year => {
    const current = new Date().getFullYear()
    
    return current - year
} 
*/


/* 
const calculateAge = year => new Date().getFullYear() - year

const logAge = year => console.log(new Date().getFullYear() - year)

logAge(1998)


console.log(calculateAge(1998)) 
*/

const person = {
    firstName: 'Ivan',
    age: 22,
    logNameWithTimeout() {      // or  logNameWithTimeout: function() { }
        setTimeout(() => {
            console.log(this.firstName)
            
        }, 1000)
    }
}