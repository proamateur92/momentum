const resetBtn = document.querySelector('.timer__reset-btn');
const startBtn = document.querySelector('.timer__start-btn');
const bigTime = document.querySelector('.timer__bigTime');
const smallTime = document.querySelector('.timer__smallTime');

const STANDARD_TIME = 1800;
let time = 0;
let stopInterval;

function updateTime(time) {
  const calcHour = Math.floor(time / 3600);
  const calcMin = Math.floor(time / 60);
  const calcSec = time % 60;
  const hour = calcHour < 10 ? `0${calcHour}` : calcHour;
  const min = calcMin < 10 ? `0${calcMin}` : calcMin;
  const sec = calcSec < 10 ? `0${calcSec}` : calcSec;
  bigTime.innerText = `${hour}:${min}`;
  smallTime.innerText = `${sec}`;
}

function resetTimer() {
  clearInterval(stopInterval);
  init();
}

function startTimer(event) {
  const type = event.target.dataset.type;
  if (type === 'start') {
    time = STANDARD_TIME;
    stopInterval = setInterval(() => {
      --time;
      updateTime(time);
      if (time === -1) {
        resetTimer();
        alert('30분 몰입이 끝났습니다!');
      }
    }, 1000);
  }
  event.target.dataset.type = 'stop';
}

function init() {
  time = STANDARD_TIME;
  updateTime(time);
  startBtn.dataset.type = 'start';
}

init();

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);
