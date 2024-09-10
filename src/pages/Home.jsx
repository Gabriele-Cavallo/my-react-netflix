import PopularFilms from "../components/catalogues/PopularFilms";
import PopularSeries from "../components/catalogues/PopularSeries";
import Upcoming from "../components/catalogues/Upcoming";
import VideoJumbotron from "../components/UI/VideoJumbotron";
import { useContext } from 'react';
import { SearchInputContext } from '../store/context';
import SearchedResults from "../components/catalogues/SearchedResults";
import Footer from '../components/UI/Footer'


export default function Home() {
    const inputContext = useContext(SearchInputContext);
    const searchInputResults = inputContext.results;
    const searchInput = inputContext.input;

    return (
       <>
            {searchInputResults.length <= 0 && searchInput.length <=0 ? 
                <section className="relative">
                    <VideoJumbotron trailerKey={'qhAB4Y1VrO8'} />
                    <div className="relative top-[65vh] z-10">
                        <Upcoming />
                        <PopularFilms />
                        <PopularSeries />
                    </div>
                    <Footer />
                </section> :
                <SearchedResults />
            }
       </>
    )
}