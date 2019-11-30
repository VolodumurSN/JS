const carName = 'Ford'
const carYear = 2010
const personYear = 1990

function calculateAge(year) {
  let currentYear = 2018
  let result = currentYear - year
  return result
}

function checkAndLogAge(name, year, compareTo) {
  if (calculateAge(year) < compareTo) {
    console.log('Возраст ' + name + ' меньше ' + compareTo + ' лет')
  } else {
    console.log('Возраст ' + name + ' больше ' + compareTo + ' лет')
  }
}

checkAndLogAge('car', carYear, 10)
checkAndLogAge('person', personYear, 10)