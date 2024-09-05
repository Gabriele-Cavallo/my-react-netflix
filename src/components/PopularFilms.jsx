import { useQuery } from "@tanstack/react-query";
import { fetchPopularFilms } from "../util/http";
import DetailsCard from "../components/DetailsCard";
import { motion } from "framer-motion";

export default function PopularFilms(){
    const { data, isPending, isError, error} = useQuery({
        queryKey: ['films'],
        queryFn: fetchPopularFilms
    });
    
    let content;
    
    if(isPending){
        content = <p>Loading films...</p>;
    }
    if(isError){
        content = <p>{error.message}</p>;
    }
    if(data){
        content = 
            <motion.ul
                variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1, transition: {staggerChildren: 0.5} }
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="films-wrapper grid grid-cols-4 gap-4">
                    {data.slice(0, 8).map(film => 
                        <motion.li 
                            variants={{
                                hidden: { opacity: 0, x: -100},
                                show: { opacity: 1, x: 0}
                            }}  
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            key={film.id}
                            className="bg-slate-800 rounded-lg card overflow-hidden text-center border-2 border-slate-950"
                            >
                                <DetailsCard type={'movie'} dataInfo={film} />
                        </motion.li>
                    )}
            </motion.ul>;
    }
    return (
        <section className="container mb-20">
            <h2 className="text-center font-bold text-3xl mb-10">TOP RATED FILMS</h2>
            {content}
        </section>
    )
}