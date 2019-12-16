var canvas = document.getElementById("game-canvas");
console.dir(canvas)
var canvasContext = canvas.getContext("2d");
var score = 0
var scoreBoard = document.getElementById('score')
var dart = document.getElementById('dart')
var dartImg = document.getElementById('dartImg')

var bezierA = 0
var bezierB = 100
var bezierC = 10
var t = 0
var trst = 0
var fluctuation = 0
var baseDartX = 0

var sound = new Audio()
sound.src = "./audio/hit.mp3"
sound.load()

function bezierCalc() {
    var x = ((1 - t) ** 2) * bezierA + 2 * (1 - t) * t * bezierB + (t ** 2) * bezierC
    t += 0.05
    dart.style.top = `${baseDartX - x}px`
    dartImg.style.height = `${(1 - t * 0.5) * 100}%`
    dartImg.style.width = `${(1 - t * 0.5) * 100}%`
    if (t > 1) {
        clearInterval(trst)
        t = 0
        sound.play()
        checkUpdateScore()
        setTimeout(prepareAndCreateListners, 1000)

    }
}

function checkUpdateScore() {
    score += checkHit(parseFloat(dart.style.left) - canvas.offsetLeft, parseFloat(dart.style.top) + 35 - canvas.offsetTop)
    scoreBoard.innerText = score.toString()
}

function makeCircle(radius, color) {
    canvasContext.beginPath();
    canvasContext.arc(240, 160, radius, 0, Math.PI * 2, false);
    canvasContext.fillStyle = color;
    canvasContext.fill();
    canvasContext.closePath();
}


function createBoard() {
    makeCircle(50, 'green')
    makeCircle(25, 'yellow')
    makeCircle(15, 'blue')
    makeCircle(10, 'red')
}

function checkHit(xCoord, yCoord) {
    let hitVal = (xCoord - 240) ** 2 + (yCoord - 160) ** 2
    if (hitVal <= 10 ** 2) return 50
    else if (hitVal <= 15 ** 2) return 25
    else if (hitVal <= 25 ** 2) return 15
    else if (hitVal <= 50 ** 2) return 5
    return 0
}

function dartFluctuation() {
    dart.style.top = `${parseFloat(dart.style.top) + (Math.random() - 0.5) * 3}px`
    dart.style.left = `${parseFloat(dart.style.left) + (Math.random() - 0.5) * 3}px`
}


createBoard()
prepareAndCreateListners()


function prepareAndCreateListners() {
    dartImg.style.height='100%'
    dartImg.style.width='100%'

    canvas.onmousemove = e => {
        console.log(e.pageX, e.pageY)
        dart.style.top = `${e.pageY - 41}px`
        dart.style.left = `${e.pageX}px`

    }

    canvas.onmouseup = e => {
        baseDartX = parseFloat(dart.style.top)
        trst = setInterval(bezierCalc, 30)
        clearListners()
        fluctuationOff()
    }

    fluctuationOn()
}

function clearListners() {
    canvas.onmouseup = () => {
    }
    canvas.onmousemove = () => {
    }

}

function fluctuationOn() {
    fluctuation = setInterval(dartFluctuation, 50)
}

function fluctuationOff() {
    clearInterval(fluctuation)
}





