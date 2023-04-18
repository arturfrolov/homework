function displayWeather(city) {
    const apiKey = '5d066958a60d315387d9492393935c19';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

    fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to fetch weather data');
            }
        })
        .then((data) => {
            const weather = {
                temp: data.main.temp,
                pressure: data.main.pressure,
                description: data.weather[0].description,
                humidity: data.main.humidity,
                speed: data.wind.speed,
                deg: data.wind.deg,
                icon: data.weather[0].icon,
            };

            document.getElementById('city-name').textContent = city;
            document.getElementById('weather-icon').src = `http://openweathermap.org/img/w/${weather.icon}.png`;
            document.getElementById('weather-description').textContent = weather.description;
            document.getElementById('temperature').textContent = `Temperature: ${weather.temp}°C`;
            document.getElementById('pressure').textContent = `Pressure: ${weather.pressure} hPa`;
            document.getElementById('humidity').textContent = `Humidity: ${weather.humidity}%`;
            document.getElementById('wind-speed').textContent = `Wind Speed: ${weather.speed} m/s`;
            document.getElementById('wind-direction').textContent = `Wind Direction: ${weather.deg}°`;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
displayWeather('Lviv');
