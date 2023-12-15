
    const baseUrl = 'http://localhost:3030/jsonstore/tasks/';

    const loadHistoryBtn = document.getElementById('load-history');
    const addWeatherBtn = document.getElementById('add-weather');
    const editWeatherBtn = document.getElementById('edit-weather');

    const historyList = document.getElementById('list');

    const locationInput = document.getElementById('location');
    const temperatureInput = document.getElementById('temperature');
    const dateInput = document.getElementById('date');


    loadHistoryBtn.addEventListener('click', loadHistory);
    addWeatherBtn.addEventListener('click', addWeather);
    editWeatherBtn.addEventListener('click', editWeather);

    currentHistoryId = '';

    async function loadHistory() {

        const response = await fetch(baseUrl);
        const data = await response.json();

        const histories = Object.values(data);

        historyList.innerHTML = '';

        for (const history of histories) {

            const historyEelement = renderHistory(history);

            historyEelement.setAttribute('data-history-id', history._id);
            
            historyList.appendChild(historyEelement);
        }
    }

    async function addWeather(e) {

        e.preventDefault();

        const location = locationInput.value;
        const temperature = temperatureInput.value;
        const date = dateInput.value;

        if (!location || !temperature || !date) {
            return;
        }

        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                location,
                temperature,
                date
            })
        });
        
        locationInput.value = '';
        temperatureInput.value = '';
        dateInput.value = '';

        await loadHistory();
    }

    async function editWeather(e) {

        e.preventDefault();

        const location = locationInput.value;
        const temperature = temperatureInput.value;
        const date = dateInput.value;

        if (!location || !temperature || !date) {
            return;
        }

        const history = {
            _id: currentHistoryId,
            location,
            temperature,
            date
        }

        const response = await fetch(baseUrl + currentHistoryId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(history)
        });
        
        locationInput.value = '';
        temperatureInput.value = '';
        dateInput.value = '';

        addWeatherBtn.disabled = false;
        editWeatherBtn.disabled = true;

        await loadHistory();
    }

    function renderHistory(history) {
        const div = document.createElement('div');
        div.className = 'container';

        const h2 = document.createElement('h2');
        h2.textContent = history.location;

        const h3Date = document.createElement('h3');
        h3Date.textContent = history.date;

        const h3Degrees = document.createElement('h3');
        h3Degrees.textContent = history.temperature;

        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'buttons-container';

        const changeBtn = document.createElement('button');
        changeBtn.textContent = 'Change';
        changeBtn.className = 'change-btn';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';

        buttonsContainer.appendChild(changeBtn);
        buttonsContainer.appendChild(deleteBtn);

        div.appendChild(h2);
        div.appendChild(h3Date);
        div.appendChild(h3Degrees);
        div.appendChild(buttonsContainer);

        changeBtn.addEventListener('click', () => {

            locationInput.value = history.location;
            temperatureInput.value = history.temperature;
            dateInput.value = history.date;

            currentHistoryId = history._id;

            div.remove();

            addWeatherBtn.disabled = true;
            editWeatherBtn.disabled = false;
        })

        deleteBtn.addEventListener('click', async () => {

            fetch(baseUrl + history._id, {
                method: 'DELETE'
            })

            await loadHistory();
        })

        return div;
    }



    



