function focused() {
    [...document.querySelectorAll('input')]
    .forEach(inputField => {
        inputField.addEventListener('focus', targetFocus),
        inputField.addEventListener('blur', targetBlur)
    });
}
const targetFocus = eventQueue => {
    eventQueue.target.parentElement.className = 'focused';
}
const targetBlur = eventQueue => {
    eventQueue.target.parentElement.className = '';
}
