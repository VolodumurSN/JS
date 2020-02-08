// class Animal {
//     static type = 'ANIMAL'

//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail 
//     }

//     voice() {
//         console.log(`I am animal`)
//     }
// }

// // const dog = new Animal({
// //     name: 'Dog',
// //     age: 1,
// //     hasTail: true
// // }) 


// class Dog extends Animal {
//     static type = 'DOG'

//     constructor(options) {
//         super(options)

//         this.color = options.color
//     }

//     voice() {
//         super.voice()
//         console.log(`My name is ${this.name}`)
//     }

//     get ageInfo() {
//         return this.age * 7
//     }

//     set ageInfo(newAge) {
//         this.age = newAge
//     }

// }

// const dog = new Dog({
//     name: 'Dog',
//     age: 1,
//     hasTail: true,
//     color: 'black'
// })


class Component {
	constructor(selector) {
		this.$el = document.querySelector(selector)
	}

	show() {
		this.$el.style.display = 'block'
	}

	hide() {
		this.$el.style.display = 'none'
	}
}

class Box extends Component {
	constructor(options){
        super(options.selector)
        
		this.$el.style.background = options.color
		this.$el.style.width = this.$el.style.height = `${options.size}px`
	}
}

const redBox = new Box({
    selector: '.box',
    color: 'red',
    size: 100
})