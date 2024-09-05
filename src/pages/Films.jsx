import { useQuery } from "@tanstack/react-query";
import { fetchGenres } from "../util/http";
import CarouslForGenre from "../components/CarouslForGenre";
import VideoJumbotron from "../components/VideoJumbotron";
import { useContext } from 'react';
import { SearchInputContext } from '../store/context';
import SearchedResults from "../components/SearchedResults";

export default function Films() {
    const inputContext = useContext(SearchInputContext);
    const searchInputResults = inputContext.results;
    const searchInput = inputContext.input;

    const { data, isError, error, isLoading } = useQuery({
        queryKey: ['genres'],
        queryFn: fetchGenres,
    });

    let content;

    if(isLoading){
        content = <p>Loading...</p>
    }
    
    if(isError){
        content = <p>{error.message}</p>
    }

    if(data){
        content = data.map(genre => <div className="last:pb-40" key={genre.id}>
            <h2 className="font-bold text-3xl ps-2 mb-3">{genre.name}</h2>
            <CarouslForGenre type={'movie'} genre={genre.id} />
        </div>)
    }

    return (
       <>
         {searchInputResults.length <= 0 && searchInput.length <=0 ? 
            <section className="px-10 relative">
                <VideoJumbotron trailerKey={'pgW_c_tPork'} />
                <div className="relative top-[65vh] z-10">
                    {content}
                </div>
            </section> :
            <SearchedResults />
        }
       </>
    )
}