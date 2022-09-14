function solve() {
    const inputField = document.getElementById('input');
    const hexa = elements('option', 'selected', 'hexadecimal', 'Hexadecimal');
    const binary = elements('option', 'selected', 'binary', 'Binary');
    const selectMenu = document.getElementById('selectMenuTo');
    const result = document.getElementById('result');
    selectMenu.appendChild(hexa);
    selectMenu.appendChild(binary);

    document.getElementsByTagName('button')[0].addEventListener('click', () => {
        selectMenu.value === 'binary' 
        ? result.value = Number(inputField.value).toString(2) 
        : result.value = Number(inputField.value).toString(16).toUpperCase();
    });
    
    function elements(type, classType, val, text) {
        const element = document.createElement(type);
        element.textContent = text;
        if (classType) {
            element.setAttribute('selected', '');
        }
        if (val) {
            element.setAttribute('value', val)
        }
        return element;
    };
}