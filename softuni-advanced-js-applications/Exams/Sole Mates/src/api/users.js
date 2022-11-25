import { get, post } from "./api.js";
import { clearUserData, setUserData, updateUserNav } from "./utility.js";
import page from '../../node_modules/page/page.mjs'


export async function register(email, password) {
    const user = await post('/users/register', { email, password });
    const userData = {
        _id: user._id,
        email: user.email,
        accessToken: user.accessToken
    };
    setUserData(userData);
    updateUserNav();
}

export async function login(email, password) {
    const user = await post('/users/login', { email, password });
    const userData = {
        _id: user._id,
        email: user.email,
        accessToken: user.accessToken
    };
    setUserData(userData);
    updateUserNav();
}

export async function logout() {
    get('/users/logout');
    clearUserData();
    updateUserNav();
    page.redirect('/dashboard');
}