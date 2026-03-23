// Quiz Functionality
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
      text: 'Have you experienced a loss of interest or pleasure in activities you used to enjoy?',
      options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']
    },
    {
      text: 'How would you rate your energy levels?',
      options: ['Very high', 'High', 'Average', 'Low', 'Very low']
    },
    {
      text: 'Do you have feelings of worthlessness or excessive guilt?',
      options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']
    },
    {
      text: 'Have you experienced any changes in appetite or weight?',
      options: ['No change', 'Increased appetite', 'Decreased appetite', 'Weight gain', 'Weight loss']
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
      options: ['Yes', 'No']
    },
    {
      text: 'Do you have any difficulties in maintaining interpersonal relationships?',
      options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']
    },
    {
      text: 'How would you rate your overall mood and emotional well-being?',
      options: ['Excellent', 'Good', 'Average', 'Poor', 'Very poor']
    },
    {
      text: 'Do you engage in any self-care activities or hobbies to manage your mental health?',
      options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']
    },
    {
      text: 'Have you sought professional help or received any treatment for your mental health concerns?',
      options: ['Yes', 'No']
    }
  ];

  let currentQuestion = 0;
let score = 0;

const questionText = document.querySelector('.question-text');
const optionInputs = document.querySelectorAll('.options input[type="radio"]');
const questionNumber = document.querySelector('.question-number');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const submitButton = document.querySelector('.submit');

function loadQuestion() {
  const question = questions[currentQuestion];
  questionText.textContent = question.text;
  questionNumber.textContent = currentQuestion + 1;

  optionInputs.forEach((input, index) => {
    input.value = question.values[index];
    const label = input.nextElementSibling;
    label.textContent = question.options[index];
  });
  updateNavigationButtons();
}

function updateNavigationButtons() {
  prevButton.disabled = currentQuestion === 0;
  nextButton.disabled = currentQuestion === questions.length - 1;
  submitButton.disabled = currentQuestion !== questions.length - 1;
}

function handleOptionChange() {
  const selectedOption = document.querySelector('.options input[type="radio"]:checked');
  if (selectedOption) {
    score += parseInt(selectedOption.value);
  }
}

function goToPrevQuestion() {
  currentQuestion--;
  loadQuestion();
}

function goToNextQuestion() {
  handleOptionChange();
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    window.location.href = "result.html?score=" + score;
  }
}

prevButton.addEventListener('click', goToPrevQuestion);
nextButton.addEventListener('click', goToNextQuestion);
submitButton.addEventListener('click', goToNextQuestion);

loadQuestion();