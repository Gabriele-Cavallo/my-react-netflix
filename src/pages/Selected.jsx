import { useParams } from "react-router-dom";
import SelectedCard from "../components/UI/SelectedCard";
import { fetchPopularFilms } from "../util/http";
import { useQuery } from "@tanstack/react-query";

export default function Selected () {
    const { selectedMovie, movie } = useParams();

    const {data, isLoading, isError, error} =useQuery({
        queryKey: ['singleData', selectedMovie],
        queryFn: ({signal}) => fetchPopularFilms({signal, param: selectedMovie, movieParam: movie})
    });

    let content;

    if(isLoading){
        content = <p>Loading..</p>
    }
    if(isError){
        content = <p>{error.message}</p>
    }

    if(data){
        content = <SelectedCard dataInfo={data} />
    }

   console.log('data' , data);

    return (
        <>
            {content}
        </>
    )
}