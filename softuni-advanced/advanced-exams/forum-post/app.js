window.addEventListener("load", solve);

function solve() {
    const postTitleInput = document.getElementById('post-title');
    const postCategoryInput = document.getElementById('post-category');
    const textArea = document.getElementById('post-content');
    const reviewListParent = document.getElementById('review-list');
    const publishedListParent = document.getElementById('published-list');
    const clearButton = document.getElementById('clear-btn');

    document.getElementById('publish-btn').addEventListener('click', e => {
      e.preventDefault();
      if (postTitleInput.value === '' || postCategoryInput.value === '' || textArea.value === '') return;

      const li = elements('li', 'rpost');
      const article = elements('article', '', '');
      const h4 = elements('h4', '', postTitleInput.value);
      const p1 = elements('p', '', `Category: ${postCategoryInput.value}`);
      const p2 = elements('p', '', `Content: ${textArea.value}`);
      const buttonApprove = elements('button', 'action-btn approve', 'Approve');
      const buttonEdit = elements('button', 'action-btn edit', 'Edit');
      article.appendChild(h4);
      article.appendChild(p1);
      article.appendChild(p2);
      li.appendChild(article);
      li.appendChild(buttonApprove);
      li.appendChild(buttonEdit);
      reviewListParent.appendChild(li);

      postTitleInput.value = '';
      postCategoryInput.value = '';
      textArea.value = '';

      buttonEdit.addEventListener('click', ev => {
        postTitleInput.value = h4.textContent;
        postCategoryInput.value = p1.textContent;
        textArea.value = p2.textContent;
        ev.target.parentElement.remove();
      });

      buttonApprove.addEventListener('click', event => {
        const _li = elements('li', 'rpost');
        const _article = elements('article', '', '');
        const _h4 = elements('h4', '', h4.textContent);
        const _p1 = elements('p', '', p1.textContent);
        const _p2 = elements('p', '', p2.textContent);
        _article.appendChild(_h4);
        _article.appendChild(_p1);
        _article.appendChild(_p2);
        _li.appendChild(_article);
        event.target.parentElement.remove();
        publishedListParent.appendChild(_li);
        const removeButtons = li.querySelectorAll('button');
        for (const button of removeButtons) {
          button.remove();
        }
      });
      clearButton.addEventListener('click', () => {
       const removeLi = publishedListParent.querySelectorAll('li');
        for (el of removeLi) {
          el.remove();
        }
      });
    });

    function elements(type, className, content) {
      const element = document.createElement(type);
      element.textContent = content;

      if (className) {
        element.setAttribute("class", className);
      }
      return element;
    }
}


/* 
function solve() {
    const postTitleInput = document.getElementById('post-title');
    const postCategoryInput = document.getElementById('post-category');
    const textArea = document.getElementById('post-content');
    const reviewListParent = document.getElementById('review-list');
    const publishedListParent = document.getElementById('published-list');
    const clearButton = document.getElementById('clear-btn');

    document.getElementById('publish-btn').addEventListener('click', e => {
      e.preventDefault();
      if (postTitleInput.value === '' || postCategoryInput.value === '' || textArea.value === '') return;

      const li = elements('li', 'rpost');
      const article = elements('article', '', '');
      const h4 = elements('h4', '', postTitleInput.value);
      const p1 = elements('p', '', postCategoryInput.value);
      const p2 = elements('p', '', textArea.value);
      const buttonApprove = elements('button', 'action-btn approve', 'Approve');
      const buttonEdit = elements('button', 'action-btn edit', 'Edit');
      article.appendChild(h4);
      article.appendChild(p1);
      article.appendChild(p2);
      li.appendChild(article);
      li.appendChild(buttonApprove);
      li.appendChild(buttonEdit);
      reviewListParent.appendChild(li);

      postTitleInput.value = '';
      postCategoryInput.value = '';
      textArea.value = '';

      buttonEdit.addEventListener('click', ev => {
        postTitleInput.value = h4.textContent;
        postCategoryInput.value = p1.textContent;
        textArea.value = p2.textContent;
        ev.target.parentElement.remove();
      });

      buttonApprove.addEventListener('click', event => {
        const _li = elements('li', 'rpost');
        const _article = elements('article', '','');
        const _h4 = elements('h4', '', h4.textContent);
        const _p1 = elements('p', '', p1.textContent);
        const _p2 = elements('p', '', p2.textContent);
        _article.appendChild(_h4);
        _article.appendChild(_p1);
        _article.appendChild(_p2);
        _li.appendChild(_article);
        publishedListParent.appendChild(_li);
        const removeButtons = li.querySelectorAll('button');
        for (const button of removeButtons) {
          button.remove();
        }
        event.target.parentElement.remove();
      });
    });

      clearButton.addEventListener('click', () => {
       const removeLi = publishedListParent.querySelectorAll('li');
        for (el of removeLi) {
          el.remove();
        }
      });


    function elements(type, className, content) {
      const element = document.createElement(type);
      element.textContent = content;

      if (className) {
        element.setAttribute("class", className);
      }
      return element;
    }
}
*/
