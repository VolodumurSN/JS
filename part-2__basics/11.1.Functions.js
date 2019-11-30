const carName = 'Ford'
const carYear = 2010
const personYear = 1990

function calculateAge(year) {
  let currentYear = 2018
  let result = currentYear - year
  return result
}

function checkAngLogAge(year) {
  if (calculateAge(year) < 10) {
    console.log('Возраст меньше 10 лет')
  } else {
    console.log('Возраст больше 10 лет')
  }
}

checkAngLogAge(carYear)
checkAngLogAge(personYear)