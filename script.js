// Total number of lessons
let totalLessons = 3;

// Complete a lesson
function completeLesson(lessonNumber) {
  localStorage.setItem(`lesson${lessonNumber}`, "completed");
  const btn = document.querySelector(`button[data-lesson="${lessonNumber}"]`);
  if(btn) btn.disabled = true;
  updateProgress();
}

// Update progress bar
function updateProgress() {
  let completed = 0;
  for (let i = 1; i <= totalLessons; i++) {
    if (localStorage.getItem(`lesson${i}`) === "completed") completed++;
    const btn = document.querySelector(`button[data-lesson="${i}"]`);
    if(btn && localStorage.getItem(`lesson${i}`) === "completed") btn.disabled = true;
  }

  let percent = Math.round((completed / totalLessons) * 100);
  
  // Update number
  const progressText = document.getElementById("progressPercent");
  if(progressText) progressText.innerText = percent + "%";

  // Update bar
  const progressBar = document.getElementById("progressBar");
  if(progressBar) progressBar.style.width = percent + "%";
}

// Quiz answer check
function checkAnswer(button, type) {
  const result = document.getElementById("quizResult");
  if(type === "correct") {
    result.innerText = "Correct! ✅";
    button.style.background = "#4CAF50";
  } else {
    result.innerText = "Wrong! ❌";
    button.style.background = "#f44336";
  }
}

// Call on page load
updateProgress();
