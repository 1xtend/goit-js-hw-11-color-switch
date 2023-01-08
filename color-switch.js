// Variables

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');
const body = document.querySelector('body');

let interval;

// Functions

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function startChangingColor() {
  interval = setInterval(() => {
    const randomNumber = randomIntegerFromInterval(0, colors.length - 1);
    const randomColor = colors[randomNumber];

    console.log(randomColor);
    body.style.backgroundColor = randomColor;
  }, 1000);

  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function stopChangingColor() {
  clearInterval(interval);

  startBtn.disabled = false;
  stopBtn.disabled = true;
}

// Event listeners

startBtn.addEventListener('click', startChangingColor);
stopBtn.addEventListener('click', stopChangingColor);
