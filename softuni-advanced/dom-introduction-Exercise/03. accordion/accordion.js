function toggle() {
    let showText = document.getElementById('extra');
    let clickButton = document.getElementsByClassName('button')[0];

    if (clickButton.textContent === 'More') {
        showText.style.display = 'block';
        clickButton.textContent = 'Less';
    } else {
        showText.style.display = 'none';
        clickButton.textContent = 'More';
    }
}