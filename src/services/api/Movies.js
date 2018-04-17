import { http, API_KEY } from './Http';

export const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500'
export const BACKDROP_BASE_URL = 'https://image.tmdb.org/t/p/original'

export const getAllMovies = (term) => (
    http.get(`search/movie?api_key=${API_KEY}&query=${term}`)
);
