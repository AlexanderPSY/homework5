var image = document.getElementById('myimg')

do {
    var link = prompt('Please input the link', 'https://picsum.photos/200')
}
while (link.slice(0, 4) !== 'http')

do {
    var stepOfRotation = parseInt(prompt('Please input the angle', '30'))
}
while (isNaN(stepOfRotation))

var angle = 0
var iteration = 0

function rotateImg() {
    image.style.transform = `rotate(${angle}deg)`
    image.src = link
    angle += stepOfRotation
    iteration++
    if (iteration > 5) clearInterval(timerRotation)
}

var timerRotation = setInterval(rotateImg, 200)

