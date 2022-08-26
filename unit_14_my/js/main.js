const param = {
  "url": "https://api.openweathermap.org/data/2.5/",
  "appid": "3bc9cdbe7a09a6fb6493846f67668802"
}


function getWeather() {
  const cityId = document.querySelector('#city').value;
  fetch(`${param.url}weather?id=${cityId}&lang=ru&units=metric&APPID=${param.appid}`)
     .then(weather => {
        return weather.json();
     }).then(showWeather);  
}

function showWeather(data) {
  document.querySelector('#weather-city').textContent = 'Город: ' + data.name;
  document.querySelector('#weather-deg').innerHTML = 'Тумпература воздуха: ' + Math.round(data.main.temp) + '&deg;';
  document.querySelector('#weather-desc').textContent = data.weather[0]['description'];
  document.querySelector('#weather-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
  document.querySelector('#weather-wind').textContent = 'Ветер: ' + ' ' + Math.round(data.wind.speed) + ' ' + 'м/с';
  document.querySelector('#weather-humi').textContent = 'Влажность: ' + ' ' + data.main.humidity + ' ' + '%';
}

getWeather();
document.querySelector('#city').onchange = getWeather;

