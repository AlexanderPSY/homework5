function deleteById(idName){
    var element = document.getElementById(idName)
    element ? element.remove(): console.log('There is no such ID')
}
deleteById('bad-id')
deleteById('bad-id')