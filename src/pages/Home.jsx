import PopularFilms from "../components/PopularFilms";
import PopularSeries from "../components/PopularSeries";
import Upcoming from "../components/Upcoming";
import VideoJumbotron from "../components/VideoJumbotron";
import { useContext } from 'react';
import { SearchInputContext } from '../store/context';
import SearchedResults from "../components/SearchedResults";

export default function Home() {
    const inputContext = useContext(SearchInputContext);
    const searchInputResults = inputContext.results;
    const searchInput = inputContext.input;

    return (
       <>
            {searchInputResults.length <= 0 && searchInput.length <=0 ? 
                <main className="relative">
                    <VideoJumbotron trailerKey={'qhAB4Y1VrO8'} />
                    <div className="relative top-[65vh] z-10">
                        <Upcoming />
                        <PopularFilms />
                        <PopularSeries />
                    </div>
                </main> :
                <SearchedResults />
            }
       </>
    )
}