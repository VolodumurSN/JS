const delay = ms => {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}

// delay(2000).then(() => console.log('After 2 sec'))

const URL = 'https://jsonplaceholder.typicode.com/users'

async function fetchAsyncTodos() {
    console.log('Fetch todos started...')
    try {
        await delay(2000)
        const responce = await fetch(URL)
        const data = await responce.json()
        console.log('Data:', data)   
    } catch (err) {
        console.error(err)
    } finally {
        
    }
}

fetchAsyncTodos()