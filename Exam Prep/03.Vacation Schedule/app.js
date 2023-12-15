const baseUrl = 'http://localhost:3030/jsonstore/tasks/';

const loadVacationBtn = document.getElementById('load-vacations');
const addVacationBtn = document.getElementById('add-vacation');
const editVacationBtn = document.getElementById('edit-vacation');

const vacationsList = document.getElementById('list');

const nameInput = document.getElementById('name');
const daysInput = document.getElementById('num-days');
const dateInput = document.getElementById('from-date');

let currentVacationId = '';

loadVacationBtn.addEventListener('click', loadVacations);

async function loadVacations() {

    const response = await fetch(baseUrl);
    const data = await response.json();

    vacationsList.innerHTML = '';

   let vacations = Object.values(data);

   for (const vacation of vacations) {

       const element = vacationCreateElement(vacation);

       vacationsList.appendChild(element);   
   }

   editVacationBtn.disabled = true;
}

addVacationBtn.addEventListener('click', addVacation);

async function addVacation(e) {

    e.preventDefault();

    const name = nameInput.value;
    const days = daysInput.value;
    const date = dateInput.value;

    if (!name || !days || !date) {
        return;
    }

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, days, date})
    }); 
    
    nameInput.value = '';
    daysInput.value = '';
    dateInput.value = '';

    await loadVacations();
}

editVacationBtn.addEventListener('click', editVacation);

async function editVacation(e) {

    e.preventDefault();

    const name = nameInput.value;
    const days = daysInput.value;
    const date = dateInput.value;

    if (!name || !days || !date) {
        return;
    }

    const response = await fetch(baseUrl + currentVacationId, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, days, date, _id: currentVacationId})
    });


    nameInput.value = '';
    daysInput.value = '';
    dateInput.value = '';

    await loadVacations();

    editVacationBtn.disabled = true;
    addVacationBtn.disabled = false;

}

   function vacationCreateElement(vacation) {

    const div = document.createElement('div');
    div.className = 'container';

    const h2Name = document.createElement('h2');
    h2Name.textContent = vacation.name;

    const h2Date = document.createElement('h3');
    h2Date.textContent = vacation.date;

    const h3Days = document.createElement('h3');
    h3Days.textContent = vacation.days;

    const chageBtn = document.createElement('button');
    chageBtn.textContent = 'Change';
    chageBtn.className = 'change-btn';

    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'Done';
    doneBtn.className = 'done-btn';

    div.appendChild(h2Name);
    div.appendChild(h2Date);
    div.appendChild(h3Days);
    div.appendChild(chageBtn);
    div.appendChild(doneBtn);

    chageBtn.addEventListener('click', async () => {
        nameInput.value = vacation.name;
        daysInput.value = vacation.days;
        dateInput.value = vacation.date;

        currentVacationId = vacation._id;

        div.remove();

        editVacationBtn.disabled = false;
        addVacationBtn.disabled = true;


    })

    doneBtn.addEventListener('click', async () => {
        fetch(baseUrl + vacation._id, {
            method: 'DELETE'
        })

        await loadVacations();
    })

    return div;
 
   }