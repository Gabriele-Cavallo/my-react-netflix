import { useQuery } from "@tanstack/react-query";
import { fetchPopularSeries } from "../../util/http";
import DetailsCard from "../UI/DetailsCard";
import { motion } from "framer-motion";


export default function PopularSeries(){
    const { data, isPending, isError, error} = useQuery({
        queryKey: ['series'],
        queryFn: fetchPopularSeries
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
                    show: { opacity: 1, transition: {staggerChildren: 0.5}}
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="films-wrapper grid grid-cols-4 gap-4">
                {data.slice(0, 8).map(serie => 
                    <motion.li 
                        variants={{
                            hidden: { opacity: 0, x: -100},
                            show: { opacity: 1, x: 0}
                        }}
                        transition={{ duration: 0.5, ease: 'easeOut'}}
                        key={serie.id}
                        className="bg-slate-800 rounded-lg card overflow-hidden text-center"
                        >
                            
                            <DetailsCard type={'tv'} dataInfo={serie} />
                    </motion.li>
                )}
            </motion.ul>;
    }
    return (
        <section className="container mb-20 pb-20">
            <h2 className="font-bold text-3xl text-center mb-10">TOP RATED SERIES</h2>
            {content}
        </section>
    )
}