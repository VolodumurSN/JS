const $start = document.querySelector('#start')
const $game = document.querySelector('#game')
const $time = document.querySelector('#time')
const $result = document.querySelector('#result')
const $timeHeader = document.querySelector('#time-header')
const $resultHeader = document.querySelector('#result-header')
const $gameTime = document.querySelector('#game-time')

let colors = ['#CB356B', '#BD3F32', '#3A1C71', '#D76D77', '#283c86', '#45a247', '#2F80ED']
let score = 0
let isGameStarted = false

$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)
$gameTime.addEventListener('input', setGameTime)


function show($el) {
    $el.classList.remove('hide')
}

function hide($el) {
    $el.classList.add('hide')   // hide with CSS class 'hide'   
}


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

    hide($start)      //hide btn
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

    show($timeHeader)
    hide($resultHeader)
}


function endGame() {
    isGameStarted = false
    setGameScore()
    $gameTime.removeAttribute('disabled')    //enable input after game start

    $game.innerHTML = ''    //clear square
    show($start)     //show btn
    $game.style.backgroundColor = '#ccc'

    hide($timeHeader)
    show($resultHeader)
}


function renderBox() {
    $game.innerHTML = ''    // clear square
    let box = document.createElement('div')     // create square
    let boxSize = getRandom(30, 100)    // get square width and height >30 and <100
    let gameSize = $game.getBoundingClientRect()
    let maxTop = gameSize.height - boxSize
    let maxLeft = gameSize.width - boxSize
    let randomColorIndex = getRandom(0, colors.length)

    //style for square
    box.style.height = box.style.width = boxSize + 'px'
    box.style.position = 'absolute'
    box.style.top = getRandom(0, maxTop) + 'px'
    box.style.left = getRandom(0, maxLeft) + 'px'
    box.style.backgroundColor = colors[randomColorIndex]
    box.style.cursor = 'pointer' 
    box.setAttribute('data-box', 'true')   // set special attribute for square

    $game.insertAdjacentElement('afterbegin', box)   // put square in game block
}


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

/* function randomColor() {
    
    let random = getRandom(0, 999)

    if (random < 10) {
        return '00' + random
    }else if (random < 100){
        return '0' + random
    }else{
        return random.toString()
    } 
} */