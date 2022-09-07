function solve() {
  const answers = [];
  let questionsIndex = 0;
  let rightAnswersCount = 0;
  const questions = document.getElementsByTagName('section');

  [...document.querySelectorAll("ul li div p")].forEach(q => {
    if (q.textContent === 'onclick' || q.textContent === 'JSON.stringify()' || q.textContent === 'A programming API for HTML and XML documents') {
      answers.push(q.textContent.trim());
    } 
});

[...document.querySelectorAll('.quiz-answer')].forEach(q => {
  q.addEventListener('click', event => {
      if (answers.includes(event.target.textContent)) {
        rightAnswersCount++;
      }
      questions[questionsIndex].style.display = 'none';
      questionsIndex++;
      if (questionsIndex !== 3) {
        questions[questionsIndex].style.display = 'block';
      } else {
        results(rightAnswersCount);
      }
  });
});

  const results = rightAnswersCount => {
  let res = '';
    document.querySelector('#results').style.display = 'block'
    rightAnswersCount === 3 ? res = 'You are recognized as top JavaScript fan!' : res = `You have ${rightAnswersCount} right answers`;
    document.querySelector('ul li h1').textContent = res;
  }
}