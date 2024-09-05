import CarouselCard from "./CarouselCard";
import { useContext } from 'react';
import { SearchInputContext } from '../store/context';

export default function SearchedResults() {
    const inputContext = useContext(SearchInputContext);
    const searchInputResults = inputContext.results;
    const searchInput = inputContext.input;
    let content;

    if(searchInputResults.length === 0 && searchInput.length > 0){
        content = <main>
        <div  className="relative top-[15vh] z-10">
            <h2 className="font-bold text-3xl ps-2 mb-3">Titoli disponibili:</h2>
            <p className="text-center text-2xl mt-10">Nessuno risultato disponibile!!!</p>
        </div>
    </main>
    } else if(searchInputResults.length > 0 && searchInput.length > 0){
        content = <main>
            <div className="relative top-[15vh] z-10">
                <h2 className="font-bold text-3xl ps-5 mb-3">Titoli disponibili:</h2>
                <ul className="grid grid-cols-6 gap-5 px-5">
                    {searchInputResults.map(item => <li key={item.id}><CarouselCard type={'movie'} dataInfo={item} /></li>)}
                </ul>
            </div>
        </main>
    }

    return(
        <>
            { content }
        </>
    )
}