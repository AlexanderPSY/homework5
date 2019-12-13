function createTag(tagName) {
    return document.createElement(tagName)
}

function placeTag(tag){
    document.body.appendChild(tag)
}

placeTag(createTag('div'))