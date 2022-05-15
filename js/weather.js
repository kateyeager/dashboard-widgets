// API key. Replace with your API key
const APIKEY = 'fa8f87b7046876deed0384f1170b63f7';

// City
const city = 'Spokane';
// Units for Farenheit
const units = 'imperial';

// URL query string
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=${units}`;



// Using fetch to get data
fetch(url)
.then( response => response.json() )
.then( data => {

  // Check-check: Is data good? 
  console.log( data );
  
  // Get Container for Weather   
  const weatherContainer = document.querySelector('.weather');
  
  // Template to output for Weather
  const template = `

<data value="${data.name}" class="city">${data.name}</data>

<data value="${data.main.temp}" class="temp">${data.main.temp}&#8457;</data>

<html><span>Feels like </span></html>
<data value="${data.main.feels_like}" class="feels_like">${data.main.feels_like}&#8457;</data>

<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="Placeholder">

`;

// <html>H: </html>
// <data value="${data.main.temp_max}" class="temp_max">${data.main.temp_max}&#8457;</data>
// <html>L: </html>
// <data value="${data.main.temp_min}" class="temp_min">${data.main.temp_min}&#8457;</data>
  


  
  // Insert dynamic template to container
  weatherContainer.insertAdjacentHTML("afterbegin", template);
  
});
