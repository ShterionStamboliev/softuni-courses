import { html, render } from "../../node_modules/lit-html/lit-html.js";
import {  register, userNav } from "../api.js";
import { showHome } from "./home.js";

const root = document.getElementById('content');

export async function registerPage() {
    const div = html `<section id="registerPage">
    <form class="registerForm" @submit=${onSubmit}>
        <img src="./images/logo.png" alt="logo" />
        <h2>Register</h2>
        <div class="on-dark">
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div class="on-dark">
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <div class="on-dark">
            <label for="repeatPassword">Repeat Password:</label>
            <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Register</button>

        <p class="field">
            <span>If you have profile click <a href="#">here</a></span>
        </p>
    </form>
</section>`;
render(div, root);
}

async function onSubmit(e) {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get('email');
    const password = form.get('password');
    const repassword = form.get('repeatPassword');
    if (!email || !password || !repassword) {
        throw new Error('All fields are required!');
    }
    if (password !== repassword) {
        alert('Passwords don\'t match, try again');
        throw new Error('Try again');
    }
    await register(email, password);
    userNav();
    showHome();
}