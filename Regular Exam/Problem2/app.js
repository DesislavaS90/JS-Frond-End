window.addEventListener("load", solve);

function solve() {
   const addBtn = document.getElementById('add-btn');
   const expenseInput = document.getElementById('expense');
   const amountInput = document.getElementById('amount');
   const dateInput = document.getElementById('date');

   const previewList = document.getElementById('preview-list');
   const expensesList = document.getElementById('expenses-list');

   const deleteBtn = document.querySelector('.delete')

   addBtn.addEventListener('click', (e) => {
       e.preventDefault();

       const expenseType = expenseInput.value;
       const amount = amountInput.value;
       const date = dateInput.value;

       if (expenseType === '' || amount === '' || date === '') {
        return;
    }

       const li = document.createElement('li');
       li.className = 'expense-item';

       const article = document.createElement('article');

       const pType = document.createElement('p');
       pType.textContent = `Type: ${expenseType}`;

       const pPrice = document.createElement('p');
       pPrice.textContent = `Amount: ${amount}$`;

       const pDate = document.createElement('p');
       pDate.textContent = `Date: ${date}`;

       divBtns = document.createElement('div');
       divBtns.className = 'buttons';

       const editBtn = document.createElement('button');
       editBtn.textContent = 'edit';
       editBtn.classList.add('btn');
       editBtn.classList.add('edit');

       const okBtn = document.createElement('button');
       okBtn.textContent = 'ok';
       okBtn.classList.add('btn');
       okBtn.classList.add('ok');

       divBtns.appendChild(editBtn);
       divBtns.appendChild(okBtn);

       article.appendChild(pType);
       article.appendChild(pPrice);
       article.appendChild(pDate);

       li.appendChild(article);
       li.appendChild(divBtns);

       previewList.appendChild(li);

       expenseInput.value = '';
       amountInput.value = '';
       dateInput.value = '';

       addBtn.disabled = true;

       editBtn.addEventListener('click', (e) => {
        expenseInput.value = pType.textContent.split(': ')[1];
        amountInput.value = pPrice.textContent.split(': ')[1].split('$')[0];
        dateInput.value = pDate.textContent.split(': ')[1];

        li.remove();

        addBtn.disabled = false;
       })

       okBtn.addEventListener('click', (e) => {
        divBtns.remove();
        okBtn.remove();
        editBtn.remove();

        expensesList.appendChild(li);

        previewList.innerHTML = '';

        addBtn.disabled = false;

       })
   })

   deleteBtn.addEventListener('click', (e) => {
    location.reload();
   })

}