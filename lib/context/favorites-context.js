import { createContext, useState } from "react";

const defaultContextValues = {
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
}

export const FavoritesContext = createContext(defaultContextValues);

export const FavoritesContextProvider = ({ children }) => {
  const [favoritesMealIds, setFavoritesMealIds] = useState([]);

  const addFavorite = (id) => {
    return setFavoritesMealIds((currentFavIds) => [...currentFavIds, id]);
  };

  const removeFavorite = (id) => {
    return setFavoritesMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favoritesMealIds,
    addFavorite,
    removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
