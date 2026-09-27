const weatherData = {
    hyderabad: {
        city: "Hyderabad",
        temperature: 29,
        feelsLike: 31,
        minTemp: 26,
        maxTemp: 33,
        description: "Partly Cloudy",
        humidity: 65,
        wind: 12
    },

    vijayawada: {
        city: "Vijayawada",
        temperature: 31,
        feelsLike: 33,
        minTemp: 28,
        maxTemp: 35,
        description: "Sunny",
        humidity: 60,
        wind: 10
    },

    kurnool: {
        city: "Kurnool",
        temperature: 30,
        feelsLike: 32,
        minTemp: 27,
        maxTemp: 34,
        description: "Partly Cloudy",
        humidity: 62,
        wind: 13
    },

    vizag: {
        city: "Visakhapatnam",
        temperature: 28,
        feelsLike: 30,
        minTemp: 25,
        maxTemp: 31,
        description: "Cloudy",
        humidity: 72,
        wind: 14
    },

    chennai: {
        city: "Chennai",
        temperature: 32,
        feelsLike: 35,
        minTemp: 29,
        maxTemp: 36,
        description: "Sunny",
        humidity: 58,
        wind: 11
    },

    bangalore: {
        city: "Bangalore",
        temperature: 24,
        feelsLike: 25,
        minTemp: 21,
        maxTemp: 27,
        description: "Light Rain",
        humidity: 78,
        wind: 9
    },

    mumbai: {
        city: "Mumbai",
        temperature: 30,
        feelsLike: 33,
        minTemp: 27,
        maxTemp: 32,
        description: "Cloudy",
        humidity: 75,
        wind: 15
    }
};


function getWeather() {

    const input = document
        .getElementById("cityInput")
        .value
        .trim()
        .toLowerCase();

    const error = document.getElementById("error");

    if (input === "") {
        error.textContent = "Please enter a city name";
        return;
    }

    if (weatherData[input]) {

        const data = weatherData[input];

        // City
        document.getElementById("cityName").textContent =
            data.city;

        // Temperature
        document.getElementById("temperature").textContent =
            `${data.temperature}°C`;

        // Description
        document.getElementById("description").textContent =
            data.description;

        // Feels Like
        document.getElementById("feelsLike").textContent =
            `${data.feelsLike}°C`;

        // Minimum Temperature
        document.getElementById("minTemp").textContent =
            `${data.minTemp}°C`;

        // Maximum Temperature
        document.getElementById("maxTemp").textContent =
            `${data.maxTemp}°C`;

        // Humidity
        document.getElementById("humidity").textContent =
            `${data.humidity}%`;

        // Wind
        document.getElementById("wind").textContent =
            `${data.wind} km/h`;

        // Date and Time
        const now = new Date();

        document.getElementById("dateTime").textContent =
            now.toLocaleString();

        // Weather Icon
        let icon = "🌤️";

        if (data.description.toLowerCase().includes("sunny")) {
            icon = "☀️";
        } else if (data.description.toLowerCase().includes("rain")) {
            icon = "🌧️";
        } else if (data.description.toLowerCase().includes("cloud")) {
            icon = "☁️";
        }

        document.getElementById("weatherIcon").textContent =
            icon;

        error.textContent = "";

    } else {

        error.textContent =
            "Weather data not available for this city.";
    }
}