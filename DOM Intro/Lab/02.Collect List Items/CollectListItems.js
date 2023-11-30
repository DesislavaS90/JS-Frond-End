function extractText() {
    const list = document.getElementById('items').textContent;
    const textarea = document.getElementById('result');
    
    textarea.textContent = list;
}