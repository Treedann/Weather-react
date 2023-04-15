import React from "react";

const Weather = ({
  city,
  country,
  temp,
  feels_like,
  weatherDescription,
  pressure,
  humidity,
  visibility,
  sunrise,
  sunset,
  error,
}) => {
  return (
    <div className="infoWeath">
      {city && (
        <div>
          <p>
            <span>
              <iconify-icon inline icon="ei:location"></iconify-icon>
            </span>{" "}
            Location: {city}, {country}
          </p>
          <p>
            <span>
              <iconify-icon inline icon="wi:thermometer"></iconify-icon>
            </span>{" "}
            Temperature: {temp} °C (feels like: {feels_like} °C)
          </p>
          <p>
            <span>
              <iconify-icon
                inline
                icon="material-symbols:nest-farsight-weather-outline"
              ></iconify-icon>
            </span>{" "}
            Weather description: {weatherDescription}
          </p>
          <p>
            <span>
              <iconify-icon inline icon="wi:barometer"></iconify-icon>
            </span>{" "}
            Pressure: {pressure} hPa
          </p>
          <p>
            <span>
              <iconify-icon inline icon="wi:humidity"></iconify-icon>
            </span>{" "}
            Humidity: {humidity}%
          </p>
          <p>
            <span>
              <iconify-icon inline icon="bi:eye-fill"></iconify-icon>
            </span>{" "}
            Visibility: {visibility / 1000} km
          </p>
          <p>
            <span>
              <iconify-icon inline icon="wi:sunrise"></iconify-icon>
            </span>{" "}
            Sunrise: {sunrise}
          </p>
          <p>
            <span>
              <iconify-icon inline icon="wi:sunset"></iconify-icon>
            </span>{" "}
            Sunset: {sunset}
          </p>
        </div>
      )}
      <p className="error"> {error} </p>
    </div>
  );
};

export default Weather;
