// RootElement <= Box <= instances

class RootElement {
	constructor(tagName = 'div') {
		this.$el = document.createElement(tagName)
		this.$el.style.marginBottom = '10px'
	}

	append() {
		document.querySelector('.wrapper').insertAdjacentElement('afterbegin', this.$el)
	}

	show() {
		this.$el.style.opacity = '1'
	}

	hide() {
		this.$el.style.opacity = '0'
		
	}
}

class Box extends RootElement {
	constructor(color, tagName, size = 150){
		super(tagName)
		this.color = color
		this.size = size
	}

	create() {
		this.$el.style.background = this.color
		this.$el.style.width = this.$el.style.height = `${this.size}px`
		this.append()

		return this
	}
}

class Circle extends RootElement {
	constructor(color) {
		super()
		this.color = color
	}

	create() {
		this.$el.style.background = this.color
		this.$el.style.borderRadius = '50%'
		this.$el.style.width = this.$el.style.height = '100px'

		this.append()

		return this
	}
}

const redBox = new Box('red', 'div', 100).create()
const bluBox = new Box('blue').create()
const pinkCircle = new Circle('pink').create()


pinkCircle.$el.addEventListener('mouseenter', () => {
	pinkCircle.hide()
})
pinkCircle.$el.addEventListener('mouseleave', () => {
	pinkCircle.show()
})


redBox.$el.addEventListener('mouseenter', () => {
	redBox.hide()
})
redBox.$el.addEventListener('mouseleave', () => {
	redBox.show()
})


bluBox.$el.addEventListener('mouseenter', () => {
	bluBox.hide()
})
bluBox.$el.addEventListener('mouseleave', () => {
	bluBox.show()
})