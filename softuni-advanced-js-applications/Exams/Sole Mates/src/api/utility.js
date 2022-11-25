export function getUserData() {
    return JSON.parse(localStorage.getItem('user'));
}

export function setUserData(data) {
    localStorage.setItem('user', JSON.stringify(data));
}

export function clearUserData() {
    localStorage.removeItem('user');
}

export function updateUserNav() {
    const user = getUserData();
    if (user) {
        document.querySelector('div[class="user"]').style.display = 'inline';
        document.querySelector('div[class="guest"]').style.display = 'none';
    } else {
        document.querySelector('div[class="user"]').style.display = 'none';
        document.querySelector('div[class="guest"]').style.display = 'inline';
    }
}
