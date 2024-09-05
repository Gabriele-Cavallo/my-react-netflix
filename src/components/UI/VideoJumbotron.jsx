import { useEffect, useState } from "react";

const trailerKeys = [
    'qhAB4Y1VrO8',
    'pgW_c_tPork',
    'jFBeY-xr30Y',
    'Yn9KdDHqSyY',
    'YpSDc25aJSo',
    'oZqzxhQpqL4',
    'vYsCcosc1p4',
    'QS8Kk39ky5Q',
    'pPLpb-boSoE'
];


export default function VideoJumbotron(){
    const randomTrailer = trailerKeys[Math.floor(Math.random() * trailerKeys.length)];
    const [iframeSrc, setIframeSrc] = useState(`https://www.youtube.com/embed/${randomTrailer}?autoplay=1&mute=1`);
    
    useEffect(() => {
        setIframeSrc(`https://www.youtube.com/embed/${randomTrailer}?autoplay=1&mute=0`)
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
            <div className="absolute z-10 left-0 bottom-0 h-[283px] inset-x-0 bg-[#141414]"></div>
        </div>
    )
}