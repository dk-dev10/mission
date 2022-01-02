const date = document.querySelector('.date');
const progress = document.querySelector('.progress').clientWidth;
const progressBar = document.querySelector('.progress span');

const targetEnd = new Date(2022, 1, 1, 0, 0, 0);
const targetStart = new Date(2022, 0, 1, 0, 0, 0);

updateDate();

/* console.log() */

function updateDate() {
  const { days, hours, minutes, seconds } = getDateTotal(targetEnd);
  const percent = getPercentTotal(targetStart, targetEnd);

  date.innerText = `${zeroDate(days)}d:${zeroDate(hours)}h:${zeroDate(
    minutes
  )}m:${zeroDate(seconds)}s`;
  progressBar.style.width = `${percent}px`;
}

function getPercentTotal(start, end) {
  const perc = (end - start) / progress;
  return (new Date() - start) / perc;
}

function getDateTotal(date) {
  const total = Date.parse(targetEnd) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
}

function zeroDate(num) {
  return num < 10 ? `0${num}` : num;
}

setInterval(() => {
  updateDate();
}, 500);
