var button = document.querySelector('button')
var h1 = document.querySelector('h1')
var input = document.querySelector('input')


// background-color => backgroundColor

h1.addEventListener('mouseenter', function() {
  this.style.color = 'purple'
  this.style.backgroundColor = 'pink'
})

h1.addEventListener('mouseleave', function() {
  this.style.color = 'black'
  this.style.backgroundColor = 'transparent'
})


button.addEventListener('click', function() {
  this.style.fontSize = 'medium'
  h1.textContent = input.value
})