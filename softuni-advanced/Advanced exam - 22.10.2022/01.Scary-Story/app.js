window.addEventListener("load", solve);

function solve() {
  const form = {
    fname: document.getElementById('first-name'),
    lname: document.getElementById('last-name'),
    age: document.getElementById('age'),
    title: document.getElementById('story-title'),
    story: document.getElementById('story'),
    genre: document.getElementById('genre')
  }
  const publishBtn = document.getElementById('form-btn');
  const previewParent = document.getElementById('preview-list');
  const divMain = document.getElementById('main');

  publishBtn.addEventListener('click', e => {
    e.preventDefault();
    
    const fname = form.fname.value;
    const lname = form.lname.value;
    const age = form.age.value;
    const title = form.title.value;
    const genre = form.genre.value;
    const story = form.story.value;
    if (!fname || !lname || !age || !title || !story) return;
    
   const liClass = elements('li', '', 'story-info', previewParent);
   const article = elements('article', '', '', liClass);
   elements('h4', `Name: ${fname} ${lname}`, '', article);
   elements('p', `Age: ${age}`, '', article);
   elements('p', `Title: ${title}`, '', article);
   elements('p', `Genre: ${genre}`, '', article);
   elements('p', `${story}`, '', article);
   const saveBtn = elements('button', 'Save Story', 'save-btn', liClass);
   const editBtn = elements('button', 'Edit Story', 'edit-btn', liClass);
   const deleteBtn = elements('button', 'Delete Story', 'delete-btn', liClass);
   [...Object.values(form)].forEach(input => input.value = '');
   publishBtn.disabled = true;
   saveBtn.disabled = false;
   editBtn.disabled = false;
   deleteBtn.disabled = false;

   editBtn.addEventListener('click', () => {
    form.fname.value = fname;
    form.lname.value = lname;
    form.age.value = age;
    form.title.value = title;
    form.genre.value = genre;
    form.story.value = story;
    saveBtn.disabled = true;
    editBtn.disabled = true;
    deleteBtn.disabled = true;
    publishBtn.disabled = false;
    liClass.remove();
   });

   saveBtn.addEventListener('click', () => {
    [...divMain.childNodes].forEach(c => c.remove());
      elements('h1', 'Your scary story is saved!', '', divMain);
   });

   deleteBtn.addEventListener('click', () => {
    previewParent.children[1].remove();
    publishBtn.disabled = false;
   });
  });
  function elements(type, text, className, parent) {
    const element = document.createElement(type);
    element.textContent = text;
    if (className) {
      element.setAttribute('class', className);
    }
    if (parent) {
      parent.appendChild(element);
    }
    return element;
  }
}