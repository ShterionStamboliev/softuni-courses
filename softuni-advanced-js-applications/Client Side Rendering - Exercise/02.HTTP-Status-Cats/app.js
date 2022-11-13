import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

const section = document.getElementById("allCats");

const temp = html`
<ul>
${cats.map(c => html `
<li>
<img src="./images/${c.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
    <button class="showBtn" @click=${onClick}>Show status code</button>
    <div class="status" style="display: none" id=${c.id}}>
        <h4>Status Code: ${c.statusCode}</h4>
        <p>${c.statusMessage}</p>
    </div>
</div>
</li>`)}
</ul>`;


function onClick(e) {
    e.preventDefault();
    const parent = e.target.parentElement;

    const showStatus = parent.querySelector('.status');
    if (showStatus.style.display === 'none') {
        showStatus.style.display = 'block';
        e.target.textContent = 'Hide status code';
    } else {
        showStatus.style.display = 'none';
        e.target.textContent = 'Show status code';
    }
}
render(temp, section);