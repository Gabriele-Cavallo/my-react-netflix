import { createContext, useRef, useState } from "react";
import { apiKey } from "../apiKey";

export const SearchInputContext = createContext({
    inputSearchResults: {
        array : [],
        input: '',
    },
    handleInputSearch: () => {},
})

export default function SearchInputContextProvider({children}) {
    const lastChange = useRef();
    const [inputSearchResults, setInputSearch] = useState({
        inputResults: [],
        inputSearch: ''})

    async function handleInputSearch(input){
        if(lastChange.current){
            clearTimeout(lastChange.current)
        }

        lastChange.current = setTimeout(async () => {
            lastChange.current = null;

            const response = await fetch(` https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${input}`);
    
            if(!response.ok){
                const error = new Error('No results find');
                throw error;
            }
    
            const data = await response.json();
            
            setInputSearch(prevState => { 
                return {
                    inputResults : [...data.results],
                    inputSearch: input
                } ;
            });

        }, 500)
    }
    
    const ctxValue = {
        results: inputSearchResults.inputResults,
        handleInputSearch,
        input: inputSearchResults.inputSearch,
    }

    return <SearchInputContext.Provider value={ctxValue}>
        {children}
    </SearchInputContext.Provider>
}