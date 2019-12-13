// Делаем функцию $(), которая может принимать аргументом название класса, айди или название просто тега.
// Если это тег, то ишем по тегу и выводим эти елементы, которые мы нашли. Если это айди, то ишем по айди.
// Если это класс. Тоооо, если на сайте несколько таких класов, возварашаем как массив елементов, который нашли,
// если только один клас, то возвараем просто один елемент не в массиве!


function $(name) {
    var element = null
    switch (name[0]) {
        case '#':
            element = document.getElementById(name.slice(1))
            if (element) return element
            console.log('ID not found')
            return null
        case '.':
            element = document.getElementsByClassName(name.slice(1))
            if (element.length === 1) return element[0]
            if (element.length > 1) return [...element]
            console.log('Class not found')
            return null
        default:
            element = document.getElementsByTagName(name)
            if (element.length === 1) return element[0]
            if (element.length > 1) return [...element]
            console.log('Tag not found')
            return null
    }
}

console.log($('.some-class'))
console.log($('.some-class1'))
console.log($('#some-id'))
console.log($('li'))
console.log($('ul'))
console.log($('.some'))
console.log($('#some'))
console.log($('liii'))