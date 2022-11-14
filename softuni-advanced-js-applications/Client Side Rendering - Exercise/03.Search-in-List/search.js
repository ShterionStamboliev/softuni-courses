import { towns } from "./towns.js";
import { html, render } from "./node_modules/lit-html/lit-html.js";

const div = document.getElementById('towns');

const templ = html`
<ul>
 ${towns.map(t => {
    return html`<li id=${t}>${t}</li>`
    })}
</ul>`;

render(templ, div);
document.querySelector('button').addEventListener('click', search);

function search() {
    const result = document.getElementById('result');
    let matches = 0;
    const field = document.getElementById('searchText').value
    for (const t of towns) {
        if (t.toLowerCase().includes(field.toLowerCase())) {
            const el = document.getElementById(`${t}`);
            el.setAttribute('class', 'active');
            matches++;
        } else {
            const el = document.getElementById(`${t}`);
            el.removeAttribute('class', 'active')
        }
    }
    result.textContent = `${matches} matches found`;
}
