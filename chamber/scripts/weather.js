const apiKey = '1a22d82909de76d8f2aa2651e22b64f9';
const city = 'Grand-Goave,HT';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function getWeatherData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }
    const data = await response.json();

    document.getElementById('temperature').textContent = data.main.temp.toFixed(1);
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('humidity').textContent = data.main.humidity;
    document.getElementById('wind').textContent = data.wind.speed;
  } catch (error) {
    console.error('Weather fetch error:', error);
    document.querySelector('.weather').innerHTML = '<p>Weather data unavailable</p>';
  }
}

getWeatherData();
