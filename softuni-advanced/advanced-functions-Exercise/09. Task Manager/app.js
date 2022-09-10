function solve() {
  const obj = {
    task: document.getElementById("task"),
    description: document.getElementById("description"),
    date: document.getElementById("date")
  }
  const [_, openSection, inProgress, completeSection] = [...document.querySelectorAll("section")]
  .map(i => i.children[1]);

  document.getElementById("add").addEventListener("click", event => {
    event.preventDefault();
    const article = document.createElement("article");
    article.appendChild(elements('h3', obj.task.value));
    const div = elements('div', '', 'flex');
    const startButton = elements('button', 'Start', 'green');
    const deleteButton = elements('button', 'Delete', 'red');
    const finishButton = elements('button', 'Finish', 'orange');
    article.appendChild(elements('p', `Description: ${obj.description.value}`));
    article.appendChild(elements('p', `Due Date: ${obj.date.value}`));
    div.appendChild(startButton);
    div.appendChild(deleteButton);
    article.appendChild(div);
    openSection.appendChild(article);
    Object.values(obj).forEach(el => el.value = '');
    
    deleteButton.addEventListener('click', () => {
      article.remove();
    });
  
    startButton.addEventListener('click', () => {
      startButton.remove();
      div.appendChild(finishButton);
      inProgress.appendChild(article);
    });
  
    finishButton.addEventListener('click', () => {
      div.remove();
      completeSection.appendChild(article);
    });
  });

  const elements = (type, description, classType) => {
    const element = document.createElement(type);
    element.textContent = description;
    if (classType) {
      element.className = classType;
    }
    return element;
  }
}
