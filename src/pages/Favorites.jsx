import { useContext } from "react";
import {FavoritesContext} from '../store/favorites';
import DetailsCard from "../components/UI/DetailsCard";

export default function Favorites() {
    const favoritesContext  = useContext(FavoritesContext)
    return(
        <section className="px-10 relative top-[100px]">
            <h2 className="font-bold text-3xl mb-3">La tua lista preferiti!</h2>
            {favoritesContext.favorites.length > 0 ? <ul className="grid grid-cols-6 gap-4">
                {favoritesContext.favorites.map(item => 
                <li className="bg-slate-800 rounded-lg card overflow-hidden text-center border-2 border-slate-950" key={item.id}>
                    <DetailsCard type={'movie'} dataInfo={item} />
                </li>
                )}
            </ul> :
            <p>Non hai ancora nessun preferito!</p>
            }
        </section>
    )
}