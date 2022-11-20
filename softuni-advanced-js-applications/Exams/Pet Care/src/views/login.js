import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { login, userNav } from "../api.js";
import { showHome } from "./home.js";

const root = document.getElementById('content');

export async function loginPage() {
    const form = html `<section id="loginPage">
    <form class="loginForm" @submit=${onSubmit}>
        <img src="./images/logo.png" alt="logo" />
        <h2>Login</h2>

        <div>
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div>
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Login</button>

        <p class="field">
            <span>If you don't have profile click <a href="#">here</a></span>
        </p>
    </form>
</section>`;
render(form, root);
}

async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get('email');
    const password = form.get('password');
    if(!email || !password) {
        alert('All fields are required!');
        throw new Error();
    }
    await login(email, password);
    e.target.reset();
    userNav();
    showHome();
}