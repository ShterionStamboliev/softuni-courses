function lockedProfile() {
    const btn = [...document.getElementsByTagName('button')];
    btn.forEach(button => button.addEventListener('click', showMore));

    function showMore(event) {
        const user = event.target.parentElement;
        const profileType = user.querySelector('input[type=radio][value=lock]').checked;
        const userInformation = user.querySelector('div');
        if (event.target.textContent === 'Show more' && profileType === false) {
            userInformation.style.display = 'block';
            event.target.textContent = 'Hide it';
        } else if (event.target.textContent === 'Hide it' && profileType === false) {
            userInformation.style.display = 'none';
            event.target.textContent = 'Show more';
        }
    }
}