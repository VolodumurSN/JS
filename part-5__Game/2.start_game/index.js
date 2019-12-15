const $start = document.querySelector('#start')
const $game = document.querySelector('#game')
const $time = document.querySelector('#time')
const $result = document.querySelector('#result')
const $timeHeader = document.querySelector('#time-header')
const $resultHeader = document.querySelector('#result-header')
const $gameTime = document.querySelector('#game-time')

let score = 0
let isGameStarted = false

$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)
$gameTime.addEventListener('input', setGameTime)


function handleBoxClick(event) {    // Listening clicks
    if (!isGameStarted) {
        return
    }

    if(event.target.dataset.box){
        score++
        renderBox()     //if click on square (dataset===box)  =>  render New square
    }
}


function startGame() {
    isGameStarted = true
    score = 0
    setGameTime()
    $gameTime.setAttribute('disabled', 'true')    //block input after game start

    $timeHeader.classList.remove('hide')
    $resultHeader.classList.add('hide')

    $start.classList.add('hide')    // hide btn with CSS class 'hide'
    $game.style.background = '#fff'     //filling game box in white 
    
    let interval = setInterval(function() {     // strart timer
        let time = parseFloat($time.textContent)
        
        if (time <= 0) {
            clearInterval(interval)
            endGame()
        }else{
            $time.textContent = (time - 0.1).toFixed(1)
        }
    }, 100)

    renderBox()     // generate random square
}


function setGameScore() {
    $result.textContent = score.toString()
}

function setGameTime() {
    let time = +$gameTime.value
    $time.textContent = time.toFixed(1)
}


function endGame() {
    isGameStarted = false
    setGameScore()
    $gameTime.removeAttribute('disabled')    //enable input after game start

    $game.innerHTML = ''    //clear square
    $start.classList.remove('hide')     //show btn
    $game.style.backgroundColor = '#ccc'

    $timeHeader.classList.add('hide')
    $resultHeader.classList.remove('hide')
}


function renderBox() {
    $game.innerHTML = ''    // clear square
    let box = document.createElement('div')     // create square
    let boxSize = getRandom(30, 100)    // get square width and height >30 and <100
    let gameSize = $game.getBoundingClientRect()
    let maxTop = gameSize.height - boxSize
    let maxLeft = gameSize.width - boxSize

    //style for square
    box.style.height = box.style.width = boxSize + 'px'
    box.style.position = 'absolute'
    box.style.top = getRandom(0, maxTop) + 'px'
    box.style.left = getRandom(0, maxLeft) + 'px'
    box.style.backgroundColor = '#000'
    box.style.cursor = 'pointer' 
    box.setAttribute('data-box', 'true')   // set special attribute for square

    $game.insertAdjacentElement('afterbegin', box)   // put square in game block
}


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}