import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { trailers } from "../../util/trailers";

export default function VideoJumbotron(){
    const randomTrailer = trailers[Math.floor(Math.random() * trailers.length)];
    const [iframeSrc, setIframeSrc] = useState(`https://www.youtube.com/embed/${randomTrailer.key}?autoplay=1&mute=1`);
    
    useEffect(() => {
        setIframeSrc(`https://www.youtube.com/embed/${randomTrailer.key}?autoplay=1&mute=0`)
    }, [randomTrailer])

    return (
        <div className="absolute inset-0 z-0 top-[-20vh]" style={{paddingBottom: "56.25%", height: "120vh", overflow: "hidden" }}>
            <iframe
                id="iframe"
                className="relative"
                src={iframeSrc}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />
            <div className="absolute left-[10vw] top-[45%] translate-y-[-50%]">
                <h2 className="font-bold text-3xl mb-3">{randomTrailer.title}</h2>
                <p className="w-[25vw]">{randomTrailer.description}</p>
                <Link to={`/movie/${randomTrailer.id}`}>
                    <button className="p-4 mt-3 rounded-xl bg-white/20 flex gap-3 align-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                        <span className="text-xl">Altre Info</span>
                    </button>
                </Link>
            </div>
            <div className="absolute z-10 left-0 bottom-0 h-[283px] inset-x-0 bg-[#141414]"></div>
        </div>
    )
}