// create city select
const cityList = [
  {
    "id": 4651744,
    "name": "Putnam County",
    "state": "TN",
    "country": "US",
    "coord": {
      "lon": -85.649979,
      "lat": 36.166729
    }
  },
  {
    "id": 4652341,
    "name": "Red Bank",
    "state": "TN",
    "country": "US",
    "coord": {
      "lon": -85.294128,
      "lat": 35.112289
    }
  },
  {
    "id": 4652359,
    "name": "Red Boiling Springs",
    "state": "TN",
    "country": "US",
    "coord": {
      "lon": -85.849983,
      "lat": 36.53339
    }
  },
  {
    "id": 4652680,
    "name": "Rehoboth",
    "state": "TN",
    "country": "US",
    "coord": {
      "lon": -89.25563,
      "lat": 36.032291
    }
  },
  {
    "id": 4653091,
    "name": "Ridgely",
    "state": "TN",
    "country": "US",
    "coord": {
      "lon": -89.487846,
      "lat": 36.263401
    }
  },
  {
    "id": 4653098,
    "name": "Ridgetop",
    "state": "TN",
    "country": "US",
    "coord": {
      "lon": -86.779442,
      "lat": 36.39505
    }
  },
  {
    "id": 4653228,
    "name": "Ripley",
    "state": "TN",
    "country": "US",
    "coord": {
      "lon": -89.5298,
      "lat": 35.745361
    }
  },
  {
    "id": 4653451,
    "name": "Roan Mountain",
    "state": "TN",
    "country": "US",
    "coord": {
      "lon": -82.070396,
      "lat": 36.196232
    }
  },
  {
    "id": 4653638,
    "name": "Robertson County",
    "state": "TN",
    "country": "US",
    "coord": {
      "lon": -86.866661,
      "lat": 36.516708
    }
  },
  {
    "id": 4653999,
    "name": "Rockwood",
    "state": "TN",
    "country": "US",
    "coord": {
      "lon": -84.684937,
      "lat": 35.865631
    }
  },
  {
    "id": 4654293,
    "name": "Rogersville",
    "state": "TN",
    "country": "US",
    "coord": {
      "lon": -83.00544,
      "lat": 36.407318
    }
  }
]

function createSelect() {
  let elSelect = document.createElement('select');
  elSelect.id = "city";
  elSelect.classList.add("select-city");
  document.querySelector('.container').append(elSelect);

  for (let i = 0; i < cityList.length; i++) {
    let city = cityList[i];
    let elOption = document.createElement('option');
    elOption.setAttribute('value', city.id);
    elOption.textContent = city.name
    console.log(elOption);
    document.querySelector('select').append(elOption);
  }
}
createSelect()

//create weather item card
let elWeatherCard = document.createElement('div');
elWeatherCard.classList.add('weather-card'); 
document.querySelector('.container').append(elWeatherCard);

let elCardTitle = document.createElement('h2');
elCardTitle.classList.add('weather-card__title');
elCardTitle.textContent = 'Погода Сегодня';
document.querySelector('.weather-card').append(elCardTitle);

let elCardItems = document.createElement('ul');
elCardItems.classList.add('weather-card__items');
document.querySelector('.weather-card').append(elCardItems);

let elCardCity = document.createElement('li');
elCardCity.id = "weather-city";
elCardCity.classList.add('weather-card__item');
document.querySelector('.weather-card__items').append(elCardCity);

let elCardDeg = document.createElement('li');
elCardDeg.id = "weather-deg";
elCardDeg.classList.add('weather-card__item');
document.querySelector('.weather-card__items').append(elCardDeg);

let elCardDesc = document.createElement('li');
elCardDesc.id = "weather-desc";
elCardDesc.classList.add('weather-card__item');
elCardDesc.classList.add('weather-card__item--upper');
document.querySelector('.weather-card__items').append(elCardDesc);

let elCardIcon = document.createElement('li');
elCardIcon.id = "weather-icon";
elCardIcon.classList.add('weather-card__item');
document.querySelector('.weather-card__items').append(elCardIcon);

let elCardWind = document.createElement('li');
elCardWind.id = "weather-wind";
elCardWind.classList.add('weather-card__item');
document.querySelector('.weather-card__items').append(elCardWind);

let elCardHumi = document.createElement('li');
elCardHumi.id = "weather-humi";
elCardHumi.classList.add('weather-card__item');
document.querySelector('.weather-card__items').append(elCardHumi);