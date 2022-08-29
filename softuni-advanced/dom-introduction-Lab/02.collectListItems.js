function extractText() {
    const getItems = document.querySelectorAll("ul#items li");
    const parsed = Array.from(getItems).map(text => text.textContent).join('\n');
    document.getElementById('result').value = parsed;
}