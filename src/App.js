import React from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  const data = async () => {
    const apiRes = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=a888c6d89d8ef6c45ff1eb3610fe307b"
    );
    const resJSON = await apiRes.json();
    return resJSON;
  };

  data().then((res) => {
    console.log("The main temperature is " + res.main.temp);
    console.log("The feels like temperature is " + res.main.feels_like);
  });

  return (
    <div className="App">
      <WeatherCard temp={-12} condition="Rain" city="Sydney" country="AU" />
      <WeatherCard temp={15} condition="Dust" city="Itajubá" country="BR" />
      <WeatherCard temp={40} condition="Tornado" city="Lorena" country="BR" />
    </div>
  );
}

export default App;
