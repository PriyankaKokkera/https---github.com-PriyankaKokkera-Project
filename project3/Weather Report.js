const apiKey = "dc89728e2e64e7973074ce94279e9b1c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (!response.ok) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }

    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "../../asset/image/clouds.png";
    } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "../../asset/image/clear.png";
    } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "../../asset/image/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "../../asset/image/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "../../asset/image/mist.png";
    } else {
        weatherIcon.src = "../../asset/image/default.png"; 
    }

    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    if (searchBox.value.trim() === "") {
        alert("Please enter a city name");
        return;
    }
    checkWeather(searchBox.value);
});
