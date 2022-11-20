import { showHome } from "./views/home.js";

const host = 'http://localhost:3030';

async function request(method, url, data) {
    const options = {
        method,
        headers: {}
    };

    if (data !== undefined) {
        options.headers['Content-type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        const token = user.accessToken;
        options.headers['X-Authorization'] = token;
    }

    try {
        const response = await fetch(host + url, options);

        if (!response.ok) {
            if (response.status === 403) {
                localStorage.removeItem('user');
            }
            const error = await response.json();
            throw new Error(error.message);
        }
        if (response.status === 204) {
            return response;
        } else {
            return response.json();
        }

    } catch(err) {
        alert(err.message);
        throw new Error(err);
    }
}

export const get = request.bind(null, 'GET');
export const put = request.bind(null, 'PUT');
export const post = request.bind(null, 'POST');
export const del = request.bind(null, 'DELETE');

export async function login(email, password) {
    const user = await post('/users/login', { email, password});
    localStorage.setItem('user', JSON.stringify(user));
}

export async function register(email, password) {
    const user = await post('/users/register', { email, password });
    localStorage.setItem('user', JSON.stringify(user));
}


export async function logout() {
    get('/users/logout');
    localStorage.removeItem('user');
    userNav();
    showHome();
}

export function userNav() {
    const user = localStorage.getItem('user');
    if (user) {
        document.querySelectorAll('.user').forEach(u => u.style.display = 'inline');
        document.querySelectorAll('.guest').forEach(u => u.style.display = 'none');
    } else {
        document.querySelectorAll('.user').forEach(u => u.style.display = 'none');
        document.querySelectorAll('.guest').forEach(u => u.style.display = 'inline');
    }
}