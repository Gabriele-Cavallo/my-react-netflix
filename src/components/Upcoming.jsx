import { useQuery } from "@tanstack/react-query";
import { upcomingMovie } from "../util/http";
import Carousel from "./Carousel";

export default function Upcoming(){
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['upcoming'],
        queryFn: upcomingMovie
    })

    let content;

    if(isLoading){
        content = <p>Loading...</p>
    }
    if(isError){
        content = <p>{error.message}</p>
    }
    if(data){
        content = <Carousel type="movie" data={data} />
    }

    return(
        <section className="px-10 mb-20">
            <h2 className="font-bold text-3xl mb-3">UPCOMING FILMS</h2>
            {content}
        </section>
    )
}