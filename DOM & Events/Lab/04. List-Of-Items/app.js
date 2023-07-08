 function addItem() {
    let text = document.getElementById('newItemText').value;
    let newLiElement = document.createElement('li');
    newLiElement.appendChild(document.createTextNode(text));
    document.getElementById('items').appendChild(newLiElement);
    document.getElementById('newItemText').value = '';
}