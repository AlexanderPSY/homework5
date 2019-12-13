var canvas = document.getElementById("game-canvas");
console.dir(canvas)
var canvasContext = canvas.getContext("2d");
var score = 0
var scoreBoard = document.getElementById('score')

var dart = document.getElementById('dart')

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


createBoard()


canvas.addEventListener('mousemove', e => {
    console.log(e.pageX,e.pageY)
    dart.style.top = `${e.pageY-41}px`
    dart.style.left = `${e.pageX}px`
})

canvas.addEventListener('mouseup', e => {
    score+=checkHit(e.pageX-canvas.offsetLeft,e.pageY-canvas.offsetTop)
    scoreBoard.innerText = score.toString();
})

dart.addEventListener('mousemove', e => {
    console.log(e.pageX,e.pageY)
    dart.style.top = `${e.pageY-41}px`
    dart.style.left = `${e.pageX}px`
})




