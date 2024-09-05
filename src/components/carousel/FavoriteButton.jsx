import { useContext } from "react";
import { FavoritesContext } from "../../store/favorites";

export default function FavoriteButton({dataInfo}){
    const favoritesContext = useContext(FavoritesContext);

    return (
       <>
            {!favoritesContext.favorites.some(item => item.id === dataInfo.id) ? <button className="p-4 bg-slate-900 rounded-[50%]" onClick={() => favoritesContext.addFavorite(dataInfo)}>➕</button> : <button className="p-4 bg-slate-900 rounded-[50%]" onClick={() => favoritesContext.removeFavorite(dataInfo)}>➖</button>}
       </> 
    )
}