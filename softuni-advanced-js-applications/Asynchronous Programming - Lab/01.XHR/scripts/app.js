function loadRepos() {
  const p = fetch('https://api.github.com/users/testnakov/repos')
   .then(response => response.json())
   .then(data => console.log(data));
}