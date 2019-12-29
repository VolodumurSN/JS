//for example: fetch(URL, {method: POST, ...})


document.querySelector('#load-btn').addEventListener('click', load)

function load() {

	const URL = 'https://jsonplaceholder.typicode.com/users'

	fetch(URL)
		.then(function(response) {
			return response.json()	
		})
		.then(function(data) {
			const usersList = document.querySelector('#users-list')

			let html = data.map(function(item) {
				return `<li>${item.id} ${item.name} (${item.email})</li>`
			})

			usersList.insertAdjacentHTML('afterbegin', html.join(' '))

		})
	
}