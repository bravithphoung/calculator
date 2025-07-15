const display = document.getElementById("display");
const clickSound = document.getElementById("clicksound");

function playSound() {
  clickSound.currentTime = 0; // Reset sound to start
  clickSound.play();
}
function append(value) {
  playSound();
  if (display.textContent === "0") display.textContent = "";
  display.textContent += value;
}
function clearDisplay() {
  playSound();
  display.textContent = "0";
}
function deleteLast() {
  playSound();
  if (display.textContent.length > 1) {
    display.textContent = display.textContent.slice(0, -1);
  } else {
    display.textContent = "0";
  }
}
function calculate() {
  playSound();
  try {
    display.textContent = eval(display.textContent);
  } catch {
    display.textContent = "Error";
  }
}
document.addEventListener("keydown", (e) => {
  const key = e.key;
  if (/\d|[+\-*/=]/.test(key)) {
    append(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key.toLocaleLowerCase() === "c") {
    clearDisplay();
  }
});
