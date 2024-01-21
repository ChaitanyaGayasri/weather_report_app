import hotBg from "./assets/hot.jpg"
import coldBg from "./assets/cold.jpg"
import "./index.css"
import Descriptions from "./components/Descriptions";
import { useEffect, useState } from "react";
import getFormattedWeatherData from "./WeatherService";


function App() {
  const [city,setCity] = useState("Paris")
  const [weather,setWeather] = useState(null)

  const [units,setUnits] = useState("metric")
  const [bg,setBg] = useState(hotBg)

  useEffect(() => {
    const fetchWeatherData = async () => {
    const data = await getFormattedWeatherData(city, units)
    setWeather(data)

    // dynamic
    const threshold = units === "metric"? 20 : 60
    if (data.temp <= threshold) setBg(coldBg);
    else setBg(hotBg)
    }
    fetchWeatherData()
  },[units,city])


  const handleUnitsClick = (e) => {
    const button = e.currentTarget
    const currentUnit = button.innerText.slice(1)
    const isCelcius = currentUnit === "C";
    button.innerText = isCelcius ? "°F" : "°C"
    setUnits(isCelcius ? "metric" : "imperial")

  }
  const onKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value)
      e.currentTarget.blur()
    }
  }

  return (
    <div className="App" style={{backgroundImage: `url(${bg})`}}>
    <div className="overlay">

      {weather && (<div className="container">
        <div className="section section__inputs">
          <input onKeyDown={onKeyPressed} type="text" name="city" placeholder="Enter Your Country.."/>
          <button onClick={(e) => handleUnitsClick(e)}>°F</button>
        </div>
        <div className="section section_temprature">
          <div className="icon">
            <h1>{`${weather.name}, ${weather.country}`}</h1>
            <img src={weather.iconURL} alt="img"/>
            <h1>{weather.description}</h1>
          </div>
          <div className="temprature">
            <h1 className="degree">{`${weather.temp.toFixed()} °${units === "metric" ? "C" : "F"}`}</h1>
          </div>
        </div>
        <Descriptions weather={weather} units={units}/>
      </div>)}
      
    </div>
    </div>
  );
}

export default App;
