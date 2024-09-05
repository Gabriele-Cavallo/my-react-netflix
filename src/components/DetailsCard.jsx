import { Link } from "react-router-dom";

export default function DetailsCard({dataInfo, type}) {
    return (
        <Link to={`/${type}/${dataInfo.id}`}>
            <img src={`https://image.tmdb.org/t/p/original${dataInfo.poster_path}`} alt={dataInfo.title} />
            <h4 className="mt-5 font-bold text-2xl">{dataInfo.title ? dataInfo.title : dataInfo.name}</h4>
            <p className="p-5">{dataInfo.overview.length <= 300 ? dataInfo.overview : dataInfo.overview.slice(0, 300) + '...'}</p>
        </Link>
    )
}