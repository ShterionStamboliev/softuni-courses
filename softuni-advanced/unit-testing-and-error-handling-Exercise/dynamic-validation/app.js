function validate() {
    const emailRegex = /^[a-z]+@[a-z]+\.[a-z]{2,}$/gm;
    const inputField = document.getElementById('email');
    
    inputField.addEventListener('change', () => {
        emailRegex.test(inputField.value) 
        ? inputField.classList.remove('error') 
        : inputField.classList.add('error');
    });
}