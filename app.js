let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [
  {
    question: "What is HTML?",
    answer: "HyperText Markup Language"
  },
  {
    question: "What is CSS?",
    answer: "Cascading Style Sheets"
  },
  {
    question: "What is JavaScript?",
    answer: "Programming language for web development"
  }
];

let currentIndex = 0;

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");

function displayCard() {
  questionEl.textContent = flashcards[currentIndex].question;
  answerEl.textContent = flashcards[currentIndex].answer;

  answerEl.classList.add("hidden");
}

function showAnswer() {
  answerEl.classList.remove("hidden");
}

function nextCard() {
  currentIndex++;

  if (currentIndex >= flashcards.length) {
    currentIndex = 0;
  }

  displayCard();
}

function prevCard() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = flashcards.length - 1;
  }

  displayCard();
}

function addCard() {
  const question = document.getElementById("newQuestion").value;
  const answer = document.getElementById("newAnswer").value;

  if (question === "" || answer === "") {
    alert("Please enter question and answer");
    return;
  }

  flashcards.push({ question, answer });

  saveData();

  document.getElementById("newQuestion").value = "";
  document.getElementById("newAnswer").value = "";

  alert("Flashcard Added!");
}

function editCard() {
  const question = document.getElementById("newQuestion").value;
  const answer = document.getElementById("newAnswer").value;

  if (question === "" || answer === "") {
    alert("Please enter updated data");
    return;
  }

  flashcards[currentIndex] = { question, answer };

  saveData();

  displayCard();

  alert("Flashcard Updated!");
}

function deleteCard() {
  if (flashcards.length === 1) {
    alert("Cannot delete last flashcard");
    return;
  }

  flashcards.splice(currentIndex, 1);

  if (currentIndex >= flashcards.length) {
    currentIndex = 0;
  }

  saveData();

  displayCard();

  alert("Flashcard Deleted!");
}

function saveData() {
  localStorage.setItem("flashcards", JSON.stringify(flashcards));
}

displayCard();
