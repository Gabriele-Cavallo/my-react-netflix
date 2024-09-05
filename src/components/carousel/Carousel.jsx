import { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import CarouselCard from "./CarouselCard";
import { motion } from "framer-motion";

export default function Carousel({data, type}){
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
            <div className="embla relative" ref={emblaRef}>
                <motion.ul 
                    variants={{
                        hidden: { opacitty: 0 },
                        show: { opacity: 1 }
                    }}
                    initial="hidden"
                    animate="show"
                    viewport={{ once: true}}
                    className="px-3 films-wrapper  h-[12vw] flex gap-4 embla__container">
                    {data.map(upcoming => 
                        <CarouselCard
                            type={type}
                            dataInfo={upcoming}
                            key={upcoming.id}
                        />
                    )}
                </motion.ul>
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