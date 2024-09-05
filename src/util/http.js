import { apiKey } from "../apiKey";

export async function fetchPopularFilms({signal, param, movieParam}) {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

    if(param){
        url = `https://api.themoviedb.org/3/${movieParam ? movieParam : 'tv'}/${param}?api_key=${apiKey}`;
    }

    const response = await fetch(url, {signal: signal});

    if(!response.ok) {
        const error = new Error('Something went wrong');
        throw error;
    }

    const data = await response.json();
    console.log('data' , data);

    if(param){
        return data;
    }

    return data.results;
}

export async function fetchPopularSeries() {
    const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`);

    if(!response.ok) {
        const error = new Error('Something went wrong');
        throw error;
    }

    const data = await response.json();
    return data.results;
}

export async function upcomingMovie() { 
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`);

    if(!response.ok){
        const error = new Error('Something went wrong');
        throw error;
    }

    const data = await response.json();
    return data.results;
}

export async function fetchGenres() {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);

    if (!response.ok){
        const error = new Error('Can\' fetch movie genres');
        throw error;
    }

    const data = await response.json();
    return data.genres;
}

export async function fetchTvGenres() {
    const response = await fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}`);

    if (!response.ok){
        const error = new Error('Can\' fetch movie genres');
        throw error;
    }

    const data = await response.json();
    return data.genres;
}


