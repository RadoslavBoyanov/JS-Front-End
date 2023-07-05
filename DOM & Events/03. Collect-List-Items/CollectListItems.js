function extractText() {
    let liItems = document.querySelectorAll('ul#items li');
    let textArea = document.getElementById('result');

    for (const node of liItems) {
        textArea.value += node.textContent + '\n';
    }
}