function editElement(text, match, replace) {
   const innerText = text.textContent;
   const regMatch = new RegExp(match, 'g');
   const toReplace = innerText.replace(regMatch, replace);
   text.textContent = toReplace;
}

