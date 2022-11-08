const section = document.getElementById('comments');
section.remove();
 
export function showComments(ev) {
    ev.preventDefault();
    let id = undefined;
    if (ev.target.tagName === 'H2') {
        postDetails();
    }
}


async function postDetails(id) {
    document.querySelector('main').replaceChildren(section);
}
