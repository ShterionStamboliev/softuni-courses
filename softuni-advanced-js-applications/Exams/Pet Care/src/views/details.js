import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { get } from '../api.js';

const root = document.getElementById('content');

export async function showDetails() {
    const user = JSON.parse(localStorage.getItem('user'))._id;
    console.log(user);
}


// async function petOwner(e) {
//     e.preventDefault();
    
    
// }