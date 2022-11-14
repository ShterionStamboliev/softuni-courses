import { html, render } from "./node_modules/lit-html/lit-html.js";

const menu = document.getElementById('menu');

async function loadData() {
    const res = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
    const data = await res.json();
    return data;
}
const info = Object.values(await loadData())
let infoData = html `${info.map(a => html `<option value=${a._id}>${a.text}</option>`)}`
render(infoData, menu);

const form = document.querySelector('form');
form.addEventListener('submit', addItem)

async function addItem(e) {
    e?.preventDefault();
    const text = document.getElementById('itemText').value;
    const res = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ text })
    });
    const data = await res.json();

    info.push(data);
    if (res.ok) {
        infoData = html `${info.map(a => html `<option value=${a._id}>${a.text}</option>`)}`
        render(infoData, menu);
    }
}