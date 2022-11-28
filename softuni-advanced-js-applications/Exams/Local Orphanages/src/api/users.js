import { get, post } from "./api.js";
import { clearUserData, setUserData, updateNav } from "./utlity.js";
import page from "../../node_modules/page/page.mjs";

export async function register(email, password) {
    const user = await post('/users/register', { email, password });
    const userData = {
        _id: user._id,
        email: user.email,
        accessToken: user.accessToken
    };
    setUserData(userData);
    updateNav();
}

export async function login(email, password) {
    const user = await post('/users/login', { email, password });
    const userData = {
        _id: user._id,
        email: user.email,
        accessToken: user.accessToken
    };
    setUserData(userData);
    updateNav();
}

export async function logout() {
    await get('/users/logout');
    clearUserData();
    updateNav();
    page.redirect('/dashboard');
}