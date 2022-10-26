const temperature = 66;
const windspeed = 5;
const windchill = document.querySelector('#windchill');

if (temperature <= 50 && windspeed > 3) {
    let windchillvalue = 35.74 + 0.6215 * temperature - 35.75 * windspeed ^ 0.16 + 0.4275 * temperature * windspeed ^ 0.16
    windchill.innerHTML =`Wind Chill: ${windchillvalue}`;
} else {
    windchill.innerHTML =`Wind Chill: N/A`;
}