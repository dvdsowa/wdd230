// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const tommorow = document.querySelector('#tommorow-temp');
const twoDays = document.querySelector('#two-days-temp');
const threeDays = document.querySelector('#three-days-temp');

const weatherIcon = document.querySelector('#weather-icon');
const weatherIconTwo = document.querySelector('#weather-icon-two');
const weatherIconThree = document.querySelector('#weather-icon-three');
const weatherIconFour = document.querySelector('#weather-icon-four');

const captionDesc = document.querySelector('#description');
const captionTwo = document.querySelector('#description-two');
const captionThree = document.querySelector('#description-three');
const captionFour = document.querySelector('#description-four');

const key = '92a60fb4b1b63b23d2314a50d145deae';
const latitude = 32.442081;
const longitude = -97.794197;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=92a60fb4b1b63b23d2314a50d145deae`;
const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${key}`;

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // testing only
        displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  } 
  
  function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  let alter = data.weather[0].main;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', alter);
  captionDesc.textContent = `${desc}`;
}

async function apiFetch2() {
  try {
    const response = await fetch(url2);
    if (response.ok) {
      const data = await response.json();
      //console.log(data); // testing only
      displayResults2(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
} 

function displayResults2(data) {
  tommorow.innerHTML = `${data.list[0].main.temp}&deg;F`;
  twoDays.innerHTML = `${data.list[8].main.temp}&deg;F`;
  threeDays.innerHTML = `${data.list[16].main.temp}&deg;F`;

  const iconsrcTwo = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
  const iconsrcThree = `https://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png`;
  const iconsrcFour = `https://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png`;

  let alternateTwo = data.list[0].weather[0].main;
  let descriptionTwo = data.list[0].weather[0].description;
  weatherIconTwo.setAttribute('src', iconsrcTwo);
  weatherIconTwo.setAttribute('alt', alternateTwo);
  captionTwo.textContent = `${descriptionTwo}`;

  let alternateThree = data.list[8].weather[0].main;
  let descriptionThree = data.list[8].weather[0].description;
  weatherIconThree.setAttribute('src', iconsrcThree);
  weatherIconThree.setAttribute('alt', alternateThree);
  captionThree.textContent = `${descriptionThree}`;

  let alternateFour = data.list[16].weather[0].main;
  let descriptionFour = data.list[16].weather[0].description;
  weatherIconFour.setAttribute('src', iconsrcFour);
  weatherIconFour.setAttribute('alt', alternateFour);
  captionFour.textContent = `${descriptionFour}`;
}
  apiFetch();
  apiFetch2();