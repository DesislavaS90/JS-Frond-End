function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/phonebook/';

    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');
    const allContacts = document.getElementById('phonebook');
    const [personInput, phoneInput] = document.querySelectorAll('input');

    loadBtn.addEventListener('click', loadContacts);

    async function loadContacts() {

        const response = await fetch(baseUrl);
        const data = await response.json();

        allContacts.innerHTML = '';

        for (const contactInfo of Object.values(data)) {

            const li = document.createElement('li');
            const buttonDel = document.createElement('button');
            li.textContent = `${contactInfo.person}: ${contactInfo.phone}`;
            buttonDel.textContent = 'Delete';
            li.appendChild(buttonDel);

            allContacts.appendChild(li);
            
            buttonDel.addEventListener('click', async () => {

                const response = await fetch(baseUrl + contactInfo._id, {
                    method: 'DELETE'
                });
            })
        }


    };

    createBtn.addEventListener('click', createContact);

    async function createContact() {

        const person = personInput.value;
        const phone = phoneInput.value;

        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ person, phone })
        })

        personInput.value = '';
        phoneInput.value = '';


    }


}

attachEvents();