function addItem() {
    let newLiElement = document.getElementById('newItemText').value;
    let list = document.getElementById('items');
    let listItem = document.createElement('li');
    listItem.textContent = newLiElement;
    let remove = document.createElement('a');
    let linkText = document.createTextNode('[Delete]');

    remove.appendChild(linkText);
    remove.href ='#';
    remove.addEventListener("click", deleteItem);

    listItem.appendChild(remove);
    list.appendChild(listItem);
    document.getElementById('newItemText').value = '';

    function deleteItem(){
        listItem.remove();
    }
}