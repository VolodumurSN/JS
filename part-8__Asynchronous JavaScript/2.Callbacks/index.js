/* 
	Client -> Server ->DataBase -> Server -> Client
 */

console.log('Client: хочу отримати список користувачів')
console.log('...')

setTimeout(() => {
	console.log('Server: роблю запит списку користувачів в БД')
	console.log('...')

	setTimeout(() => {
		console.log('DB: формую список користувачів')
		console.log('...')

		setTimeout(() => {
			console.log('Server: трансформую дані для клієнта')
			console.log('...')

			setTimeout(() => {
				console.log('Client: отримав дані і відображаю їх')
				console.log('...')
			}, 1000)
		}, 500)
	}, 500)
}, 1000)
