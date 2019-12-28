/* 
	Client -> Server ->DataBase -> Server -> Client
 */


/* 
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
 */


const promise = new Promise((resolve, reject) => {		//reject -- помилка коду
	setTimeout(() => {
		console.log('Server: роблю запит списку користувачів в БД')
		console.log('...')

		resolve()	// Успішне виконання коду
	}, 1000);
})

promise.then(() => {	//Коли щось відбудеться( виконається resolve() ), викличеться ця ф-я
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let users = [
				{uid: 'id1', name: 'Max'},
				{uid: 'id2', name: 'Ivan'}
			]

			//reject('База даних не змогла отримати список користувачів')
			//І викликається метод catch

			console.log('DB: формую список користувачів', users)
			console.log('...')

			resolve(users)
		}, 500);
	})
})
.then((dbUsers) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Server: трансформую дані для клієнта')
			console.log('...')

			let users = dbUsers.map((user) => {
				return {
					id: user.uid,
					firstName: user.name,
					timestamp: Date.now()
				}
			})

			resolve(users)
		}, 500);
	})
})
.then((users) => {
	setTimeout(() => {
		console.log('Client: отримав дані і відображаю їх', users)
	}, 1000);
})
.catch((error) => {		//Метод виводить помилку якщо вона є
	console.error(error)
})
/* .finally(() => {	//Метод викличеться навіть, при помилці
	console.log('Finally')
	
}) */
