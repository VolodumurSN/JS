document.querySelector('#load-btn').addEventListener('click', load)

async function load() {		//Метод Async

	const URL = 'https://jsonplaceholder.typicode.com/users'

	/* fetch(URL)
		.then(function(response) {  //парсимо відповідь з серверу
			return response.json()	
		})
		.then(function(data) {
			const usersList = document.querySelector('#users-list')

			let html = data.map(function(item) {
				return `<li>${item.id} ${item.name} (${item.email})</li>`
			})

			usersList.insertAdjacentHTML('afterbegin', html.join(' '))

		})
	 */

	let response = await fetch(URL) //Поки не виконається fetch(URL), 
									//response не оприділиться

	let data = await response.json() //Поки не виконається response.json(), 
									//data не оприділиться і наступний код не виконається


	// const usersList = document.querySelector('#users-list')

	let html = data.map(function(item) {
		return `<li>${item.id} ${item.name} (${item.email})</li>`
	})

	document.querySelector('#users-list').insertAdjacentHTML('afterbegin', html.join(' '))
	
}