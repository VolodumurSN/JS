const $start = document.querySelector('#start')
const $game = document.querySelector('#game')

$start.addEventListener('click', startGame)



function startGame() {
    $start.classList.add('hide')    // hide btn with CSS class 'hide'
    $game.style.background = '#fff'     //filling game box in white 
    
    renderBox()     // generate random square
}

function renderBox() {
    
}