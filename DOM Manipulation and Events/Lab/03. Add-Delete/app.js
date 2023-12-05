function addItem() {
   let inputElement = document.getElementById('newItemText');
   
   let liElement = document.createElement('li');
   liElement.textContent = inputElement.value;

   let deleteLink = document.createElement('a');
   deleteLink.href = '#';
   deleteLink.textContent = '[Delete]';

   deleteLink.addEventListener('click', (event) => {
       event.currentTarget.parentNode.remove();
   })

   liElement.appendChild(deleteLink);

   document.getElementById('items').appendChild(liElement);

   inputElement.value = '';

   
}