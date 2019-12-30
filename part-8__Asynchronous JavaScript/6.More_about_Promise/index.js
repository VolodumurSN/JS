function sleep(ms) {
	return new Promise(function(resolve) {
		setTimeout(function() {
			resolve()
		}, ms)
	})
}

sleep(1500).then(function() {
	console.log('1500')
})

sleep(5000).then(function() {
	console.log('5000')
})

//When past 5000ms => .then
Promise.all([sleep(1500), sleep(5000)]).then(function() {
	console.log('ALL')
})

//When past 1500ms => .then
Promise.race([sleep(1500), sleep(5000)]).then(function() { 
	console.log('RACE')
})


/* 
const p1 = sleep(1500).then(function() {
	return {
		name: 'Promise 1500'
	}
})

const p2 = sleep(5000).then(function() {
	return {
		name: 'Promise 5000'
	}
})

async function start() {
	let dataAll = await Promise.all([p1, p2])
	let dataRace = await Promise.race([p1, p2])

	console.log('ALL', dataAll)
	console.log('RACE', dataRace)
}

start()
 */