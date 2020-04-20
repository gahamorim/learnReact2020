import React from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  return (
    <div className="App">
      <WeatherCard temp={-12} condition="Rain" city="Sydney" country="AU" />
      <WeatherCard temp={15} condition="Dust" city="Itajubá" country="BR" />
      <WeatherCard temp={40} condition="Tornado" city="Lorena" country="BR" />
    </div>
  );
}

export default App;
