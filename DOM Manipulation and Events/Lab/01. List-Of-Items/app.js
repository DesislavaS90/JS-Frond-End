function addItem() {
    
    let inputElement = document.getElementById('newItemText');
    let liElement = document.createElement('li');

    liElement.textContent = inputElement.value;

    document.getElementById('items').appendChild(liElement);

    inputElement.value = '';
}