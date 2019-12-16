function getInnerTextOfElement(name) {
    var element = null
    switch (name[0]) {
        case '#':
            element = document.getElementById(name.slice(1))
            if (element) return element.innerText
            console.log('ID not found')
            return null
        case '.':
            element = document.getElementsByClassName(name.slice(1))[0]
            if (element) return element.innerText
            console.log('Class not found')
            return null
        default:
            alert("Wrong input data")
            return null
    }
}

console.log(getInnerTextOfElement('#some-id'))
console.log(getInnerTextOfElement('.some-class'))
console.log(getInnerTextOfElement('#some-idd'))
console.log(getInnerTextOfElement('.some-classs'))
console.log(getInnerTextOfElement('some'))