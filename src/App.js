import React from "react";
import moment from "moment/moment";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "255857e67f2608e71d5e034ad3700faf";

class App extends React.Component {
  state = {
    weather: {
      temp: undefined,
      feels_like: undefined,
      city: undefined,
      country: undefined,
      weatherDescription: undefined,
      pressure: undefined,
      humidity: undefined,
      visibility: undefined,
      sunrise: undefined,
      sunset: undefined,
    },

    error: undefined,
  };

  gettingWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    let lat = "";
    let lon = "";

    if (city) {
      switch (city) {
        case "Almaty":
          lat = "43.25";
          lon = "76.95";
          break;
        case "Nur-Sultan":
          lat = "51.1801";
          lon = "71.446";
          break;
        case "Shymkent":
          lat = "42.3417";
          lon = "69.5901";
          break;
        case "Karaganda":
          lat = "49.8019";
          lon = "73.1021";
          break;
        case "Pavlodar":
          lat = "52.2833";
          lon = "76.9667";
          break;
        case "Semey":
          lat = "50.4268";
          lon = "80.2667";
          break;
        case "Taraz":
          lat = "42.9";
          lon = "71.3667";
          break;
        case "Petropavl":
          lat = "54.8667";
          lon = "69.15";
          break;
        case "Ust-Kamenogorsk":
          lat = "49.9714";
          lon = "82.6059";
          break;
        case "Turkestan":
          lat = "43.2973";
          lon = "68.2517";
          break;
        case "Kokshetau":
          lat = "53.2833";
          lon = "69.4";
          break;
        case "Taldyqorghan":
          lat = "45";
          lon = "77.91667";
          break;
        case "Dzhezkazgan":
          lat = "47.78333";
          lon = "67.76667";
          break;
        default:
          alert("Sorry, this city was not found in database :(");
          break;
      }

      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      const data = await api_url.json();

      let sunr = new Date(+data.sys.sunrise * 1000);
      let sunrise = moment(sunr).format("LTS");
      let suns = new Date(+data.sys.sunset * 1000);
      let sunset = moment(suns).format("LTS");

      let weather = {
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        city: data.name,
        country: data.sys.country,
        weatherDescription: data.weather[0].description,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        visibility: data.visibility,
        sunrise: sunrise,
        sunset: sunset,
      };
      this.setState({
        weather,
        error: undefined,
      });
    } else {
      this.setState({
        weather: {},
        error: "Enter the City name, please.",
      });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info />
              </div>
              <div className="col-sm-7 form">
                <Form weatherMethod={this.gettingWeather} />
                <Weather
                  temp={this.state.weather.temp}
                  feels_like={this.state.weather.feels_like}
                  city={this.state.weather.city}
                  country={this.state.weather.country}
                  weatherDescription={this.state.weather.weatherDescription}
                  pressure={this.state.weather.pressure}
                  humidity={this.state.weather.humidity}
                  visibility={this.state.weather.visibility}
                  sunrise={this.state.weather.sunrise}
                  sunset={this.state.weather.sunset}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
