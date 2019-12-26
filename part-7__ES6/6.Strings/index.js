const createLink = ({path, name}) => `<a href="${path}" target="_blank">${name}</a>`

const ul = document.querySelector('ul')

const google = `<li>${createLink({path: 'https://google.com', name: 'Google'})}</li>`
const bing = `<li>${createLink({path: 'https://bing.com', name: 'Bing'})}</li>`

ul.insertAdjacentHTML('afterbegin', google)
ul.insertAdjacentHTML('afterbegin', bing)

const strToLog = `
    Hi
        This is
          New tab
`
console.log(strToLog)