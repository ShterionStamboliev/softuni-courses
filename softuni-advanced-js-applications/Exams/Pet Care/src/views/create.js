import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { userNav } from "../api.js";
import { showHome } from "./home.js";

const root = document.getElementById('content');

export async function createPage() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        const div = html`
        <section id="createPage">
            <form class="createForm" @submit=${onSubmit}>
                <img src="./images/cat-create.jpg">
                <div>
                    <h2>Create PetPal</h2>
                    <div class="name">
                        <label for="name">Name:</label>
                        <input name="name" id="name" type="text" placeholder="Max">
                    </div>
                    <div class="breed">
                        <label for="breed">Breed:</label>
                        <input name="breed" id="breed" type="text" placeholder="Shiba Inu">
                    </div>
                    <div class="Age">
                        <label for="age">Age:</label>
                        <input name="age" id="age" type="text" placeholder="2 years">
                    </div>
                    <div class="weight">
                        <label for="weight">Weight:</label>
                        <input name="weight" id="weight" type="text" placeholder="5kg">
                    </div>
                    <div class="image">
                        <label for="image">Image:</label>
                        <input name="image" id="image" type="text" placeholder="../../images/dog2.jpg">
                    </div>
                    <button class="btn" type="submit">Create Pet</button>
                </div>
            </form>
        </section>`;
        render(div, root);
    }
}


async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name').trim();
    const breed = form.get('breed').trim();
    const age = form.get('age').trim();
    const weight = form.get('weight').trim();
    const image = form.get('image').trim();
    const user = JSON.parse(localStorage.getItem('user')); 
    if (!name || !breed || !age || !weight || !image) {
        alert('All fields are required!');
        throw new Error();
    }
    if (user) {
        await fetch('http://localhost:3030/data/pets', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ name, breed, age, weight, image })
        });
    }
    userNav();
    showHome();
}