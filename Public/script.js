let timer = 60;
const timerDisplay = document.getElementById("timer");

function countdown() {
    if (timer > 0) {
        timer--;
        timerDisplay.textContent = timer;
    } else {
        timer = 60; 
    }
}

setInterval(countdown, 1000);
