import React from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  return (
    <div className="App">
      <WeatherCard temp={-5} />
      <WeatherCard temp={15} />
      <WeatherCard temp={40} />
    </div>
  );
}

export default App;
