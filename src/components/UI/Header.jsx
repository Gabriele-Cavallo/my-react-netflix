import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { SearchInputContext } from "../../store/context";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Header() {
    const { scrollY } = useScroll();
    const headerBackgroundColor = useTransform(scrollY, [0, 80], ["#ff000000", "black"]);
    
    const inputContext = useContext(SearchInputContext);

    const [openDropDown, setOpenDropDown ] = useState(false);
    const [ openSearchBar, setOpenSearchBar] = useState(false);

    function handleDropDown(){
        setOpenDropDown(prevState => !prevState)
    }

    function handleSearchBar(){
        if(openSearchBar && inputContext.input === ''){
            setOpenSearchBar(false);
        }else if(openSearchBar && inputContext.input !== ''){
            setOpenSearchBar(true);
        }else {
            setOpenSearchBar(prevState => !prevState);
        }
    }

    function resetSearchBar(e){
        e.stopPropagation();
        if(openSearchBar && inputContext.input !== ''){
            inputContext.handleInputSearch('');
            setOpenSearchBar(prevState => !prevState);
        }else if(openSearchBar && inputContext.input === ''){
            setOpenSearchBar(prevState => !prevState);
        }
    }

    return (
        <motion.header style={{ backgroundColor: headerBackgroundColor }} id="header" className="ps-5 pe-10 flex justify-between items-center max-h-[80px] gap-10 h-full top-0 left-0 z-20 bg-gradient-to-b from-black to-transparent fixed w-full transition-all duration-1000">
            <div className="flex gap-10">
                <h2>Ciao sono l'header</h2>
                <nav>
                    <ul className="font-semibold text-lg flex justify-center gap-10">
                        <li>
                            <NavLink onClick={resetSearchBar} className={({isActive}) => isActive ? 'text-red-700 font-bold' : 'text-white'} to={'/'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={resetSearchBar} className={({isActive}) => isActive ? 'text-red-700 font-bold' : 'text-white'} to={'/films'}>Films</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={resetSearchBar} className={({isActive}) => isActive ? 'text-red-700 font-bold' : 'text-white'} to={'/series'}>Series</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <menu className="flex gap-5 items-center">
                {!openSearchBar ? 
                    <div onClick={handleSearchBar} className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg> 
                        <input className="search-input w-0 bg-black" type="text" placeholder="Titoli,persone,generi" />
                    </div> :
                    <div onClick={handleSearchBar} className="px-2 pe-3 flex gap-2 border-2 bg-black border-white py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <input onChange={(e) => inputContext.handleInputSearch(e.target.value)} onClick={(e) => e.stopPropagation()} className="search-input w-[195px] ps-2 ms-2 focus:outline-none bg-black" type="text" placeholder="Titoli,persone,generi" />
                        <div className="cursor-pointer" onClick={resetSearchBar}>✖</div>
                    </div>
                }
                <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                    <div className="notifications absolute top-0 right-0">2</div>
                </div>
                <div onMouseEnter={handleDropDown} onMouseLeave={handleDropDown} className="flex items-center relative user gap-2">
                    <div className="user-logo">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 chevron transition-all duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    {openDropDown && <div className="dropdown absolute top-[100%] right-[50%] ps-3">
                        <div className="flex justify-end min-w[200px] pb-2 pt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 rotate-[180deg]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>  
                        </div>
                        <div className="min-w-[200px] py-2 bg-black hover:underline font-semibold ps-2">Gestisci profilo</div>
                        <div className="min-w-[200px] py-2 bg-black hover:underline font-semibold ps-2">Aggiungi Profilo</div>
                        <div className="min-w-[200px] py-2 bg-black hover:underline font-semibold ps-2">Account</div>
                        <div className="min-w-[200px] py-2 bg-black hover:underline font-semibold ps-2">Centro assistenza</div>
                    </div>}
                </div>
            </menu>
        </motion.header>
    )
}