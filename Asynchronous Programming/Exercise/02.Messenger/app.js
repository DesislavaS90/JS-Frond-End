function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/messenger/';

    const refreshBtn = document.getElementById('refresh');
    const sendBtn = document.getElementById('submit');

    const messageArea = document.getElementById('messages');
    const [authorInput, contentInput] = document.querySelectorAll('input');

    refreshBtn.addEventListener('click', refreshMessages);

    async function refreshMessages() {

        const response = await fetch(baseUrl);
        const data = await response.json();

        let chatInfo = []

        for (const dataInfo of Object.values(data)) {

            chatInfo.push(`${dataInfo.author}: ${dataInfo.content}`);   
        }

        messageArea.value = chatInfo.join('\n');
        
    }

    sendBtn.addEventListener('click', sendMessage);

    async function sendMessage() {

        const author = authorInput.value;
        const content = contentInput.value;

        const response = await fetch(baseUrl, {
            method: 'POST',     
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ author, content })
        })

        authorInput.value = '';
        contentInput.value = '';
    }

}

attachEvents();