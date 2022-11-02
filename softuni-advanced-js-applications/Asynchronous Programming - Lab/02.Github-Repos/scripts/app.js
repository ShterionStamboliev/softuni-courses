function loadRepos() {
  const user = document.getElementById("username").value;
  const reposParent = document.getElementById("repos");
  fetch(`https://api.github.com/users/${user}/repos`)
    .then((response) => {
      if (response.ok === false) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      const info = data.map((repo) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = repo.html_url;
        a.textContent = repo.full_name;
        li.appendChild(a);
        reposParent.appendChild(li);
        return li;
      });
      reposParent.replaceChildren(...info);
    })
    .catch((err) => console.log(err));
}
