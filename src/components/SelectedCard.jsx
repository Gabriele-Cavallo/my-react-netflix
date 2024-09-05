import { useEffect, useState } from "react";
import { apiKey } from "../apiKey";
import { useParams } from "react-router-dom";


export default function SelectedCard({dataInfo}) {
    const [trailerData, setTrailerData] = useState([]);
    const { movie } = useParams();

    useEffect(() => {
        async function trailer() {
            const response = await fetch(`https://api.themoviedb.org/3/${movie ? 'movie' : 'tv'}/${dataInfo.id}/videos?api_key=${apiKey}`);

            if(!response.ok){
                const error = new Error('Couldn\' fetch trailer');
                throw error;
            }

            const data = await response.json();

            if(data){
                setTrailerData(data.results);
            }
            
        };

        trailer();

    }, [dataInfo.id]);

    return (
        <div className="relative h-[100vh] bg-slate-950 text-center grid grid-cols-2 py-10">
            <div className="bg-wrapper">
                <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${dataInfo.backdrop_path})`}}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            </div>
            <div className="col-span-2 z-10">
                <h2 className="mt-5 font-bold text-5xl font- relative bottom-[100px] pb-10 uppercase">{dataInfo.title}</h2>
                <div className="grid grid-cols-2">
                    <div className="film-info">
                        <p className="w-[50%]">{dataInfo.overview}</p>
                    </div>
                    {trailerData.length > 0 && <div className="video-wrapper grid place-content-center">
                        <iframe
                                width="800"
                                height="450"
                                src={`https://www.youtube.com/embed/${trailerData[0].key}`}
                                title={dataInfo.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                    </div>}
                </div>
                {trailerData.length > 1 && (
                    <div className="trailer-carousel relative top-[100px] col-span-2 mt-10 px-10">
                        <h3 className="text-xl font-bold pb-5">ALL TRAILER</h3>
                        <div className="carousel flex gap-4 overflow-x-auto">
                            {trailerData.slice(1, 15).map(trailer => (
                                <div key={trailer.id} className="trailer-card">
                                    <iframe
                                        width="240"
                                        height="135"
                                        src={`https://www.youtube.com/embed/${trailer.key}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}