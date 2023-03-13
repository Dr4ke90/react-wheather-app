import React from "react";
import WeatherForm from "../WeatherForm/WeatherForm";
import { WeatherContext } from "../../Context/WeatherContext";
import { useContext } from "react";
import LocationInfo from "../Location/LocationInfo";
import "./navbar.css";

const Navbar = () => {

  const { defaultWeather } = useContext(WeatherContext);
  const { customWeather } = useContext(WeatherContext);

  const weatherData = customWeather ? customWeather : defaultWeather;

  if (!weatherData) {
    return null;
  }

  return (
      <nav className="navbar">
        <div className="left-elements">
          <LocationInfo weatherData={weatherData} />
          <WeatherForm />
        </div>
        <div className="right-elements">
          <p>About</p>
        </div>
      </nav>
  );
};

export default Navbar;
