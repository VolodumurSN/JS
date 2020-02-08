 /*
console.log('Request data...')


setTimeout(() => {
    console.log('Preparing data...')

    const backendData = {
        server: 'aws',
        port: 2000,
        status: 'working'
    }

    setTimeout(() => {
        backendData.modified = true
        console.log('Data received', backendData)
    }, 2000)
}, 2000)
 
*/


/* 
console.log('Request data...')

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing data...')

        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendData)
    }, 2000)
})

p.then(data => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
        }, 2000)
    })
})
.then(clientData => {
    clientData.fromPromise = true
    return clientData
})

.then(modData => {
    console.log('Modified', modData)
})

.catch(err => console.log('Error:', err))

.finally(() =>console.log('Finally'))

*/


const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}
/* 
const p1 = sleep(2000).then(() => console.log('After 2 sec'))
const p2 = sleep(3000).then(() => console.log('After 3 sec'))
*/
Promise.all([sleep(2000), sleep(3000)]).then(() => console.log('All'))
Promise.race([sleep(2000), sleep(3000)]).then(() => console.log('Race'))