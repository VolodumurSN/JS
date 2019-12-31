class MyPromise {
	constructor(callback) {
		this.onCatch = null
		this.onFinally = null
		this.thenCbs = []

		function resolver(data) {
			this.thenCbs.forEach(cb => {
				data = cb(data)
			});

			if (this.onFinally) {
				this.onFinally()
			}
		}

		function rejecter(error) {
			if (this.onCatch) {
				this.onCatch(error)
			}

			if (this.onFinally) {
				this.onFinally()
			}
		}

		callback(resolver.bind(this), rejecter.bind(this))
	}

	then(cb) {
		this.thenCbs.push(cb)
		return this
	}

	catch(cb) {
		this.onCatch = cb
		return this
	}

	finally(cb) {
		this.onFinally = cb
	}
}

const promise = new MyPromise((resolve, reject) => {
	setTimeout(() => {
		resolve(2)
	}, 2000)
})

promise
	.then(num => num *=2)
	.catch(err => console.log(err))
	.then(num => num *=3)
	.then(num => console.log(num))
	.finally(() => console.log('finally'))

