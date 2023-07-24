import React, { useEffect, useState } from "react";
import "../App.css";
export default function Locations() {
  let [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favLocations")) || []
  );

  return (
    <>
      <div className="containerr">
        <header className="App-header">
              <ul className="list-group list-group-flush ">
                {favorites.map((item, index) => (
                  <li
                    className="list-group-item list-group-item-primary tab-pane fade show active"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
        </header>
      </div>
    </>
  );
}
