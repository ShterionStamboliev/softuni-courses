import { html, render } from "./node_modules/lit-html/lit-html.js";
import { loadData } from "./data.js";
const tbody = document.querySelector('.container tbody');
const students = await loadData();
const searchBtn = document.querySelector('#searchBtn');
searchBtn.addEventListener('click', solve);

const studentTemplate = studends => html `
${studends.map(c => html `
<tr>
    <td>${c.firstName} ${c.lastName}</td>
    <td>${c.email}</td>
    <td>${c.course}</td>
</tr>`)}`;

const templ = studentTemplate(Object.values(students));

render(templ, tbody);

function solve() {
   const tableData = document.querySelector('.container tbody').children;
   let searchField = document.getElementById('searchField')
   let inpt = searchField.value;
   searchField.value = '';
   
   for (const info of tableData) {
       info.classList.remove('select');

       if (info.textContent.toLowerCase().includes(inpt.toLowerCase())) {
           info.classList.add('select');
       }
   }
}

