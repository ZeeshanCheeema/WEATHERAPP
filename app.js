const Apikey = "f57d96338d58aafbf5b41b65c2e48a6a";
const Apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".weather-icon");

const loader = document.querySelector(".loader");

document.querySelector(".error").style.display = "none";
document.querySelector(".weather").style.display = "none";

let searchedCity = "";

searchBtn.addEventListener("click", () => {
  const city = searchBox.value.trim();
  if (city) {
    if (
      document.querySelector(".country").innerHTML.length &&
      city === searchedCity
    ) {
      return;
    }

    searchedCity = city;
    checkweather(city);
  }
});

// Add enter

searchBox.addEventListener("keydown", (Event) => {
  if (Event.key === "Enter") {
    const city = searchBox.value.trim();
    if (city) {
      if (
        document.querySelector(".country").innerHTML.length &&
        city === searchedCity
      ) {
        return;
      }
      searchedCity = city;
      checkweather(city);
    }
  }
});

async function checkweather(city) {
  loader.style.display = "block";
  searchBtn.disabled = true;

  document.querySelector(".error").style.display = "none";
  document.querySelector(".weather").style.display = "none";

  const response = await fetch(Apiurl + city + `&appid=${Apikey}`);

  loader.style.display = "none";
  searchBtn.disabled = false;

  if (response.status === 404) {
    document.querySelector(".error").textContent =
      "Invalid city name! Please try again.";
    document.querySelector(".error").style.display = "block";
  } else {
    const data = await response.json();

    const {
      name,
      sys: { country },
      main: { humidity, temp },
      wind: { speed },
    } = data;

    document.querySelector(".city").innerHTML = name;
    document.querySelector(".country").innerHTML = `country : ${country}`;
    document.querySelector(".temp").innerHTML =
      Math.round(temp - 273.15) + "°C";
    document.querySelector(".humidity").innerHTML = humidity + "%";
    document.querySelector(".wind").innerHTML = speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      WeatherIcon.src = "assets/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      WeatherIcon.src = "assets/images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      WeatherIcon.src = "assets/images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      WeatherIcon.src = "assets/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      WeatherIcon.src = "assets/images/mist.png";
    } else {
      WeatherIcon.src = "assets/images/clouds.png";
    }

    document.querySelector(".weather").style.display = "block";
  }
}
