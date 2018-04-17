import { http } from './Http';

export const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500'
export const BACKDROP_BASE_URL = 'https://image.tmdb.org/t/p/original'

export const getAllMovies = (term) => (
    http.get(`search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${term}`)
);
