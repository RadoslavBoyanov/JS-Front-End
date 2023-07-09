function addItem() {
    let text = document.getElementById('newItemText');
    let itemValue = document.getElementById('newItemValue');
    let select = document.getElementById('menu');

    let option = document.createElement('option');
    option.textContent = text.value;
    option.value = itemValue.value;
    select.appendChild(option);

    text.value = '';
    itemValue.value = '';
}