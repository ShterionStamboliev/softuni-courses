window.addEventListener("load", solve);

function solve() {
    const inputs = {
      inputTitle: document.getElementById('post-title'),
      inputCategory: document.getElementById('post-category'),
      inputContent: document.getElementById('post-content')
    };

    const lists = {
      review: document.getElementById('review-list'),
      publish: document.getElementById('published-list')
    }
    const clearBtn = document.getElementById('clear-btn');
    
    document.getElementById('publish-btn').addEventListener('click', e => {
      e.preventDefault();
      const title = inputs.inputTitle.value;
      const category = inputs.inputCategory.value;
      const content = inputs.inputContent.value;
      if (title === '' || category === '' || content === '') return;

      const li = elements('li', 'rpost');
      const article = elements('article', '', '', li);
      elements('h4', '', title, article);
      elements('p', '', `Category: ${category}`, article);
      elements('p', '', `Content: ${content}`, article);
      const buttonApprove = elements('button', 'action-btn approve', 'Approve', li);
      const buttonEdit = elements('button', 'action-btn edit', 'Edit', li);
      lists.review.appendChild(li);

      Object.values(inputs).forEach(input => {
        input.value = '';
      });

      buttonEdit.addEventListener('click', () => {
        inputs.inputTitle.value = title;
        inputs.inputCategory.value = category;
        inputs.inputContent.value = content;
        li.remove();
      });

      buttonApprove.addEventListener('click', () => {
        lists.publish.appendChild(li);
        buttonApprove.remove();
        buttonEdit.remove();
      });

      clearBtn.addEventListener('click', () => {
        lists.publish.innerHTML = '';
      });
    });

    function elements(type, className, content, parent) {
      const element = document.createElement(type);
      element.textContent = content;

      if (parent) {
        parent.appendChild(element);
      };
      if (className) {
        element.setAttribute("class", className);
      };
      return element;
    }
}