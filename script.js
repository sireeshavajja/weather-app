const apiKey = "d84c6e9fc7c94c4f986132248261205";

async function getWeather() {
  const city = document.getElementById("city").value;
  const error = document.getElementById("error");

  if (city === "") {
    error.innerText = "Please enter a city name";
    return;
  }

  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
    );

    if (!res.ok) {
      throw new Error("City not found");
    }

    const data = await res.json();

    // Update UI
    document.getElementById("cityName").innerText = data.location.name;
    document.getElementById("temp").innerText =
      data.current.temp_c + " °C";
    document.getElementById("desc").innerText =
      data.current.condition.text;

    // Weather Icon
    document.getElementById("icon").src =
      "https:" + data.current.condition.icon;

    error.innerText = "";

  } catch (err) {
    error.innerText = err.message;
  }
}