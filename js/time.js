const timeNow = document.querySelector('.time__now-text');

function checkTime() {
  const now = new Date();
  const hour = now.getHours() < 10 ? `0${now.getHours()}` : `${now.getHours()}`;
  const minute = now.getMinutes() < 10 ? `0${now.getMinutes()}` : `${now.getMinutes()}`;
  const second = now.getSeconds() < 10 ? `0${now.getSeconds()}` : `${now.getSeconds()}`;
  const amPm = hour > 11 ? 'PM' : 'AM';
  timeNow.innerText = `${hour}:${minute}:${second} ${amPm}`;
}

checkTime();
setInterval(checkTime, 1000);
