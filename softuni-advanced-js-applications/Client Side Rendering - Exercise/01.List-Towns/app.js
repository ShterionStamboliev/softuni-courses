import {html, render} from "./node_modules/lit-html/lit-html.js"



document.getElementById('btnLoadTowns').addEventListener('click', addTowns);


function addTowns(e) {
    e.preventDefault();
    const main = document.getElementById('root');
    const input = document.getElementById('towns').value.split(', ');
    const templ = html `
    <ul>
    ${input.map(t => html `<li>${t}</li>`)}
    </ul>`

    render(templ, main)
}