import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext({
    favorites: [],
    addFavorite: () => {},
})

export default function FavoritesContextProvider({children}){
const [favoritesList, setFavoritesList] = useState(() => {{
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
}});

useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favoritesList));
}, [favoritesList])


function addFavorite(dataInfo){
    setFavoritesList(prevFavorites => {
        if (!prevFavorites.some(favorite => favorite.id === dataInfo.id)) {
            return [...prevFavorites, dataInfo]; 
        }
    })
};

function removeFavorite(dataInfo){
    setFavoritesList(prevFavorites => {
        if (prevFavorites.some(favorite => favorite.id === dataInfo.id)) {
            return prevFavorites.filter(favorite => favorite.id !== dataInfo.id); 
        }
    })
};

const ctxValue = {
    favorites: favoritesList,
    addFavorite,
    removeFavorite,
}

return <FavoritesContext.Provider value={ctxValue}>
    {children}
</FavoritesContext.Provider>
}