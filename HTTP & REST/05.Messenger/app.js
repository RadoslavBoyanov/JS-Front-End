function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/messenger';
    const sendButton = document.getElementById('submit');
    const refreshButton = document.getElementById('refresh');
    const textArea = document.getElementById('messages');
    const author = document.querySelector('input[name="author"]');
    const message = document.querySelector('input[name="content"]');

    sendButton.addEventListener('click', sentMessage);
    refreshButton.addEventListener('click', loadMessages);

    async function sentMessage() {


        let object = {
            author: author.value,
            content: message.value
        }
        try {
            await fetch(BASE_URL, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(object),
            });
        } catch (error) {
            console.error(error);
        }
    }

    async function loadMessages() {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        const length = Object.values(data).length;

        Object.values(data).forEach((data, index) => {
            const result = index === length - 1
                ? `${data.author}: ${data.content}`
                : `${data.author}: ${data.content}\n`;
            textArea.textContent += result;
        })
    }
}

attachEvents();