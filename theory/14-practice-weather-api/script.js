const param = {
   "url": "https://api.openweathermap.org/data/2.5/",
   "appid": "adc5595817e680bcff31f46a4e8dffac"
}

function getWeather() {
   const cityId = document.querySelector('#city').value;
   fetch(`${param.url}weather?id=${cityId}&lang=ru&units=metric&APPID=${param.appid}`)
      .then(weather => {
         return weather.json();
      }).then(showWeather);  
}

function showWeather(data) {
   console.log(data);
   document.querySelector('.weather__city').textContent = data.name;
   document.querySelector('.weather__forecast').innerHTML = Math.round(data.main.temp) + '&deg;';
   document.querySelector('.weather__desc').textContent = data.weather[0]['description'];
   document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   document.querySelector('.weather__wind').textContent = 'Ветер' + ' ' + Math.round(data.wind.speed) + ' ' + 'м/с';
   document.querySelector('.weather__humidity').textContent = 'Влажность' + ' ' + data.main.humidity + ' ' + '%';
}

getWeather();
document.querySelector('#city').onchange = getWeather;
