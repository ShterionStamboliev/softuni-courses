import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/users.js';

const registerTemplate = (onSubmit) => html`
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form class="login-form" @submit=${onSubmit}>
            <input type="text" name="email" id="register-email" placeholder="email">
            <input type="password" name="password" id="register-password" placeholder="password">
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password">
            <button type="submit">login</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
    </div>
</section>`;

export async function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');
        const repass = form.get('re-password');
        if (!email || !password || !repass) {
            return alert('Missing fields!')
        }
        if (password != repass) {
            return alert('Passwords don\'t match!')
        }
        await register(email, password);
        ctx.page.redirect('/dashboard');
    }
}