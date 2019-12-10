let divs = document.querySelectorAll('div')
let link = document.querySelector('a')

for(let i = 0; i < divs.length; i++){
    divs[i].addEventListener('click', function (event) {
        
        event.stopPropagation()
        console.log(this.getAttribute('id'))

    }) // can use ',true' to reverse 0 and 1
}

link.addEventListener('click', function (event) {
    event.stopPropagation()

    let div = divs[0]

    div.style.display = div.style.display === 'none'
        ? div.style.display = 'flex'
        : div.style.display = 'none'
})