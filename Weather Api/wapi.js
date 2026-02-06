const apiKey = 'a41a4c848a4dcf234e801a61ee1182aa';

function getWeather() {
  const city = document.getElementById('cityInput').value.trim();

  if (city === "") {
    document.getElementById("weatherResult").innerHTML = `
      <div class="alert alert-warning">
        Please enter a city name.
      </div>
    `;
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === "404") {
        document.getElementById("weatherResult").innerHTML = `
          <div class="alert alert-danger">
            City not found!
          </div>
        `;
        return;
      }

      const weatherHTML = `
        <div class="mt-3">
          <h4 class="fw-bold">${data.name}, ${data.sys.country}</h4>
          <img 
            src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
            alt="Weather icon"
          >
          <p class="mb-1"><strong>Temperature:</strong> ${data.main.temp}°C</p>
          <p class="mb-1 text-capitalize"><strong>Condition:</strong> ${data.weather[0].description}</p>
          <p class="mb-1"><strong>Humidity:</strong> ${data.main.humidity}%</p>
          <p class="mb-0"><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        </div>
      `;

      document.getElementById("weatherResult").innerHTML = weatherHTML;
    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML = `
        <div class="alert alert-danger">
          Error fetching weather data.
        </div>
      `;
      console.error(error);
    });
}
