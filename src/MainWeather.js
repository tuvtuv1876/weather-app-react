import React from "react";

export default function Overview() {
  return (
    <div className="container Overview">
      <div className="row g-5">
        <div className="col-4 overview-1">
          <img id="icon" src="./media/sunny.png" alt="" />
          <h2 id="key-temperature">21</h2>
          <span id="degrees"> °C </span>
        </div>
        <div className="col-4 overview-2">
          <ul>
            <li id="humidity">Humidity: 60%</li>
            <li id="wind">Wind: 5km/h</li>
          </ul>
        </div>
        <div className="col-4 overview-3">
          <h3>Zurich</h3>

          <div className="time">Sunday, 21:58</div>
          <div className="weather-description" id="description">
            Cloudless
          </div>
        </div>
      </div>
    </div>
  );
}
