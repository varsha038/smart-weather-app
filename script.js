async function getWeather() {

    const city = document.getElementById("city").value;

    const apiKey = "a1fb3a8f08a67c1336b56667948618b1";

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        // Error Handling

        if (data.cod != 200) {
            alert("City not found or API issue");
            return;
        }

        // Display Data

        document.getElementById("cityName").innerHTML = data.name;

        document.getElementById("temperature").innerHTML =
            Math.round(data.main.temp) + "°C";

        document.getElementById("description").innerHTML =
            data.weather[0].description;

        document.getElementById("humidity").innerHTML =
            "Humidity: " + data.main.humidity + "%";

        document.getElementById("wind").innerHTML =
            "Wind: " + data.wind.speed + " km/h";

        // Weather Icon

        const iconCode = data.weather[0].icon;

        const iconUrl =
            `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        document.getElementById("weatherIcon").src = iconUrl;

        // Dynamic Background

        const weatherMain = data.weather[0].main;

        document.body.className = "";

        if (weatherMain === "Clear") {
            document.body.classList.add("sunny");
        }

        else if (weatherMain === "Clouds") {
            document.body.classList.add("cloudy");
        }

        else if (weatherMain === "Rain") {
            document.body.classList.add("rainy");
        }

        else if (weatherMain === "Snow") {
            document.body.classList.add("snow");
        }

    }

    catch (error) {

        console.log(error);

        alert("Something went wrong");

    }

}