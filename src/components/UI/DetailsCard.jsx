import { Link } from "react-router-dom";
import FavoriteButton from "../carousel/FavoriteButton";

export default function DetailsCard({dataInfo, type}) {

    return (
        <div className="pb-3 flex h-full flex-col justify-between">
            <Link to={`/${type}/${dataInfo.id}`}>
                <img src={`https://image.tmdb.org/t/p/original${dataInfo.poster_path}`} alt={dataInfo.title} />
                <h4 className="mt-5 mb-3 px-2 font-bold text-2xl">{dataInfo.title ? dataInfo.title : dataInfo.name}</h4>
                <p className="px-5 mb-2">{dataInfo.overview.length <= 300 ? dataInfo.overview : dataInfo.overview.slice(0, 300) + '...'}</p>
            </Link>
            <div>
                <FavoriteButton className="place-items-end" dataInfo={dataInfo} />  
            </div>
        </div>
    )
}