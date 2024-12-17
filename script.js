const startButton = document.getElementById("startButton");
const timerInput = document.getElementById("timer");
const background = document.getElementById("background");

let colors = ["#1a1a1a", "#2b1f1f", "#3d2f2f", "#503e3e", "#654d4d"];
let index = 0;
let timerInterval;

// Función para cambiar el color de la "luz"
function changeBackgroundColor() {
  if (index >= colors.length) index = 0;
  background.style.backgroundColor = colors[index];
  index++;
}

// Iniciar el temporizador
function startTimer() {
  const seconds = parseInt(timerInput.value) || 0;
  let remainingTime = seconds;

  if (timerInterval) clearInterval(timerInterval);

  // Cambia el color cada 3 segundos
  changeBackgroundColor();
  const colorInterval = setInterval(changeBackgroundColor, 3000);

  // Apaga la luz tras el tiempo especificado
  timerInterval = setInterval(() => {
    remainingTime--;

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      clearInterval(colorInterval);
      background.style.backgroundColor = "#000"; // Apaga la luz
    }
  }, 1000);
}

startButton.addEventListener("click", startTimer);
