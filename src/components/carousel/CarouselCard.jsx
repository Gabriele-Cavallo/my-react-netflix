import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CarouselCard({dataInfo, type}) {
    const viewportWidth = window.innerWidth;
    return (
        <motion.li
            variants={{
                hidden: { opacity: 0, x: viewportWidth},
                show: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 1, ease: 'easeOut'}}
            className="embla__slide h-auto rounded-lg overflow-hidden bg-slate-950 relative">
                <Link to={`/${type}/${dataInfo.id}`}>
                    <img className="object-fill h-full w-full" src={`https://image.tmdb.org/t/p/original${dataInfo.poster_path ? dataInfo.poster_path : dataInfo.backdrop_path }`} alt={dataInfo.title} />
                </Link>
        </motion.li>
    )
}