import React, { useState } from "react";

const FavoriteButton = () => {
  const [favorites, setFavorites] = useState([]);

  const handleFavoriteClick = () => {
    // If the item is not in the favorites array, add it
    if (favorites.indexOf("item") === -1) {
      setFavorites([...favorites, "item"]);
    } else {
      // If the item is already in the favorites array, remove it
      setFavorites(favorites.filter((item) => item !== "item"));
    }
  };

  return (
    <button className="favbtn btn ms-3 " onClick={handleFavoriteClick}>
      {favorites.indexOf("item") === -1
        ? "Add to Favorites"
        : "Remove from Favorites"}
    </button>
  );
};

export default FavoriteButton;
