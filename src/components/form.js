import React from "react";

const Form = (props) => (
  <dev>
    <h5>The database contains weather information for these cities:</h5>
    <p>
      Almaty, Nur-Sultan, Shymkent, Karaganda, Pavlodar, Semey, Taraz,
      Petropavl, Ust-Kamenogorsk, Turkestan, Kokshetau, Taldyqorghan,
      Dzhezkazgan.
    </p>
    <form onSubmit={props.weatherMethod}>
      <input type="text" name="city" placeholder="City" />
      <button>Get weather</button>
    </form>
  </dev>
);

export default Form;
