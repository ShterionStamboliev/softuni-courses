async function loadCommits() {
  const username = document.getElementById("username").value;
  const repo = document.getElementById("repo").value;
  const commitsParent = document.getElementById("commits");

  try {
    const result = await fetch(
      `https://api.github.com/repos/${username}/${repo}/commits`
    );
    if (result.ok === false) {
      throw new Error(`${result.status} ${result.statusText}`);
    }
    const data = await result.json();
    for (const { commit } of data) {
      const li = document.createElement("li");
      li.textContent = `${commit.author.name}: ${commit.message}`;
      commitsParent.appendChild(li);
    }
  } catch (err) {
    commitsParent.innerHTML = `Error: ${err.message}`;
  }
}
