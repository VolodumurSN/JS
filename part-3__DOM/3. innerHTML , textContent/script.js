// class -> .CLASS_NAME
// id -> #ID
// tag -> TAG_NAME

// .querySelectorAll

let div = document.querySelector('#lists')
let p = document.querySelector('.text')
let h1 = document.querySelector('h1')
let input = document.querySelector('input')

div.innerHTML = '<h2 style="color: red;">From jS</h2>'
h1.textContent = 'Changed from JS'

console.log(input.getAttribute('type'))
input.setAttribute('type', 'number')
console.log(div.innerHTML)
console.log(h1.textContent)

// classList => .add, .remove, .contains
p.classList.add('textColor')