import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/users.js";
import { updateNav } from "../api/utlity.js";

const loginTemplate = (onSubmit) => html`
<section id="login-page" class="auth">
    <form id="login" @submit=${onSubmit}>
        <h1 class="title">Login</h1>

        <article class="input-group">
            <label for="login-email">Email: </label>
            <input type="email" id="login-email" name="email">
        </article>

        <article class="input-group">
            <label for="password">Password: </label>
            <input type="password" id="password" name="password">
        </article>

        <input type="submit" class="btn submit-btn" value="Log In">
    </form>
</section>`;

export async function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const form = new FormData(e.target);
        const email = form.get('email');
        const pass = form.get('password');
        if (!email || !pass) {
            return alert('Missing fields');
        }
        await login(email, pass);
        updateNav();
        ctx.page.redirect('/dashboard');
    }
}