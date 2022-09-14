function create(words) {
   words.forEach(word => {
      const div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);
      document.getElementById('content').appendChild(div);
      div.addEventListener('click', displayOnClick);
   });
   function displayOnClick(event) {
      event.target.children[0].style.display = '';
   } 
}
