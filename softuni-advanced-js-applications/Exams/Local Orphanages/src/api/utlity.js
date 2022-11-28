export function getUserData() {
    return JSON.parse(localStorage.getItem('user'));
}

export function setUserData(data) {
    return localStorage.setItem('user', JSON.stringify(data));
}

export function clearUserData() {
    return localStorage.removeItem('user');
}

export function updateNav() {
    const user = getUserData();
    if (user) {
        document.getElementById('user').style.display = 'inline';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline';
    }
}