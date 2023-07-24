import React, { useEffect } from "react";
import { useState } from "react";
const api = {
  key: "779417e910dd7082791ffd0ecf895632",
  base: "https://api.openweathermap.org/data/2.5/",
};
export default function Home() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (e) => {
    if (!favorites.some((item) => item.name === weather.name)) {
      setFavorites([...favorites, weather.name]);
    }
  };

  useEffect(() => {
    localStorage.setItem("favLocations", JSON.stringify(favorites));
    console.log(favorites);
  }, [favorites]);

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };
  return (
    <>
      <div className="containerr">
        <header className="App-header">
          <div className="col">
            <div className="formdata">
              <input
                className="form-control searchBox"
                type="text"
                placeholder="Enter your city/town"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn ms-3 searchBtn" onClick={searchPressed}>
                Search
              </button>
            </div>
            <br></br>

            {typeof weather.main !== "undefined" ? (
              <div className="resultsparent">
                <div className="results">
                  <ul className="list-group list-group-flush ">
                    <li className="list-group-item list-group-item-primary tab-pane fade show active">
                      {weather.name}
                    </li>
                    <li className="list-group-item list-group-item-warning tab-pane fade show active">
                      {weather.main.temp} °C
                    </li>
                    <li className="list-group-item list-group-item-info tab-pane fade show active">
                      {weather.weather[0].main}
                    </li>
                    <li className="list-group-item list-group-item-danger tab-pane fade show active">
                      ({weather.weather[0].description})
                    </li>
                  </ul>
                  {favorites.some((item) => item === weather.name) ? (
                    <button className="btn btn-secondary mt-3" disabled>
                      Added to Favorites
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary mt-3"
                      onClick={addToFavorites}
                    >
                      Add to Favorites
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="parentalert">
                <div className="alert alertbg" role="alert">
                  Invalid search!
                </div>
              </div>
            )}
          </div>
        </header>
      </div>
    </>
  );
}
