import { useCallback, useEffect, useState } from "react";
import { apiKey } from "../../apiKey";
import CarouselCard from "../carousel/CarouselCard";
import useEmblaCarousel from 'embla-carousel-react'


export default function CarouslForGenre({genre, type}) {
    const [filmsByGenre, setFilmsByGenre] = useState([]);

    useEffect(() => {
        async function fetchFilmsByGenre() {
            const response = await fetch(`https://api.themoviedb.org/3/discover/${type}?api_key=${apiKey}&with_genres=${genre}`);
        
            if(!response.ok){
                const error = new Error('Something went wrong try later.');
                throw error;
            }
            
            const data = await response.json();
            
            if(data){
                setFilmsByGenre(data.results);
            }
        }

        fetchFilmsByGenre()
    }, [genre, type])

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })

    useEffect(() => {
        if (emblaApi) {
        console.log(emblaApi.slideNodes())
        }
    },[emblaApi]);
    
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi]);
    
    const scrollNext = useCallback(() => { 
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <>
            <div className="embla relative mb-10" ref={emblaRef}>
                <ul className="px-3 h-[300px] flex gap-4 embla__container">
                    {filmsByGenre.length > 0 && filmsByGenre.map(film => 
                        <CarouselCard type={type} dataInfo={film} key={film.id} />
                    )}
                </ul>
                <div id="carousel-button">
                    <button className="absolute translate-y-[-50%] top-[50%] left-[20px] embla__prev bg-transparent text-white p-5" onClick={scrollPrev}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-16">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>     
                    <button className="absolute translate-y-[-50%] top-[50%] right-[20px] embla__next bg-transparent text-white p-5" onClick={scrollNext}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-16">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}