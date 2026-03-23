const urlParams = new URLSearchParams(window.location.search);
const score = urlParams.get('score');

const questions = [
    {
      text: 'How often do you feel sad or depressed?',
      options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']
    },
    {
      text: 'Do you have trouble sleeping or staying asleep?',
      options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']
    },
    {
      text: 'How often have you experienced a loss of interest or pleasure in activities you used to enjoy?',
      options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']
    },
    {
      text: 'Do u feel motivated and like doing the tasks u liked to do?',
      options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']
    },
    {
      text: 'Do you have feelings of worthlessness or excessive guilt?',
      options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']
    },
    {
      text: 'How often have you experienced any changes in appetite?',
      options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']
    },
    {
      text: 'Do you have trouble concentrating or making decisions?',
      options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']
    },
    {
      text: 'Have you had recurrent thoughts of death or suicidal ideation?',
      options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']
    },
    {
      text: 'How often do you feel anxious or stressed?',
      options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']
    },
    {
      text: 'Do you experience panic attacks or excessive worrying?',
      options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']
    },
    {
      text: 'Have you experienced any trauma or significant life events that may be impacting your mental health?',
      options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']
    },
    {
      text: 'Do you have any difficulties in maintaining interpersonal relationships?',
      options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']
    },
    {
      text: 'How would you rate your overall mood and emotional well-being?',
      options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']
    },
    {
      text: 'Do you engage in any self-care activities or hobbies to manage your mental health?',
      options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']
    },
    {
      text: 'Have you sought professional help or received any treatment for your mental health concerns?',
      options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']
    }
  ];

const optionScores = {
  'Never': 0,
  'Rarely': 2,
  'Sometimes': 4,
  'Often': 6,
  'Always': 8,
};

function determineResult(totalScore) {
  const maxScore = questions.length * 4; // Assuming the maximum score for each question is 4

  if (totalScore >= maxScore * 0.8) {
    return 'Your mental health appears to be in a critical state. It is highly recommended to seek professional help immediately.';
  } else if (totalScore >= maxScore * 0.6) {
    return 'Your mental health is showing signs of concern. It is recommended to seek professional help or engage in self-care activities.';
  } else if (totalScore >= maxScore * 0.4) {
    return 'Your mental health is within an average range, but it is advisable to practice self-care and monitor your well-being.';
  } else {
    return 'Your mental health appears to be in a good state. However, it is still important to maintain a healthy lifestyle and engage in self-care activities.';
  }
}

function getScoreLabel(percentage) {
  if (percentage >= 80) {
    return 'Very Critical';
  } else if (percentage >= 60) {
    return 'Alert!';
  } else if (percentage >= 40) {
    return 'Pleasant';
  } else {
    return 'Excellent';
  }
}

const totalScore = parseInt(score);
const result = determineResult(totalScore);
const percentage = (totalScore / (questions.length * 4)) * 100; // Assuming the maximum score for each question is 4
const scoreLabel = getScoreLabel(percentage);

const recommendations = [
  'Practice mindfulness and relaxation techniques',
  'Engage in regular physical activity',
  'Seek support from loved ones or a professional'
];

const resultsSection = document.createElement('section');
resultsSection.classList.add('results');

const heading = document.createElement('h2');
heading.textContent = 'Your Emotional Health Score';
resultsSection.appendChild(heading);

const scoreContainer = document.createElement('div');
scoreContainer.classList.add('score-container');

const scoreElement = document.createElement('div');
scoreElement.classList.add('score');
scoreElement.textContent = `${percentage.toFixed(0)}%`;
scoreContainer.appendChild(scoreElement);

const scoreLabelElement = document.createElement('div');
scoreLabelElement.classList.add('score-label');
scoreLabelElement.textContent = scoreLabel;
scoreContainer.appendChild(scoreLabelElement);

resultsSection.appendChild(scoreContainer);

const quote = document.createElement('p');
quote.classList.add('quote');
quote.textContent = '"The healthiest response to life is joy."';
resultsSection.appendChild(quote);

const resultText = document.createElement('p');
resultText.classList.add('result-text');
resultText.textContent = result;
resultsSection.appendChild(resultText);

const recommendationsList = document.createElement('ul');
recommendationsList.classList.add('recommendations');
recommendations.forEach(recommendation => {
  const li = document.createElement('li');
  li.textContent = recommendation;
  recommendationsList.appendChild(li);
});
resultsSection.appendChild(recommendationsList);

const viewTipsLink = document.createElement('a');
viewTipsLink.href = 'tips.html';
viewTipsLink.classList.add('cta');
viewTipsLink.textContent = 'View Tips';
resultsSection.appendChild(viewTipsLink);

const main = document.querySelector('main');
main.appendChild(resultsSection);