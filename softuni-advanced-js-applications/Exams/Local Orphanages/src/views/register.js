import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/users.js";
import { updateNav } from "../api/utlity.js";

const registerTemplate = (onSubmit) => html`
<section id="register-page" class="auth">
    <form id="register" @submit=${onSubmit}>
        <h1 class="title">Register</h1>

        <article class="input-group">
            <label for="register-email">Email: </label>
            <input type="email" id="register-email" name="email">
        </article>

        <article class="input-group">
            <label for="register-password">Password: </label>
            <input type="password" id="register-password" name="password">
        </article>

        <article class="input-group">
            <label for="repeat-password">Repeat Password: </label>
            <input type="password" id="repeat-password" name="repeatPassword">
        </article>

        <input type="submit" class="btn submit-btn" value="Register">
    </form>
</section>`;

export async function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const form = new FormData(e.target);
        const email = form.get('email');
        const pass = form.get('password');
        const repass = form.get('repeatPassword');
        if (!email || !pass || !repass) {
            return alert('Missing fields');
        }
        if (pass !== repass) {
            return alert('Wrong passwords');
        }
        await register(email, pass);
        updateNav();
        ctx.page.redirect('/dashboard');
    }
}