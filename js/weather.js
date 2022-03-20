const API_KEY = 'ab1f4c86d87ab6ddf1cc5d109d241449';

function geoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const city = document.querySelector('.info span:first-child');
      const temp = document.querySelector('.info span:last-child');
      city.innerText = `${data.name}`;
      temp.innerHTML = `${data.main.temp}° <i class="fa-solid fa-cloud"></i>`;
    });
}

function geoError() {
  alert('날씨 정보를 불러올 수 없습니다.');
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
