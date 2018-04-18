import { POSTER_BASE_URL } from '../../../services/api/Movies'

export const formatMovieData = movie => ({
    id: movie.id,
    genres: movie.genres !== undefined ? movie.genres.map(genre => genre.name).join(', ') : null,
    original_title: movie.original_title,
    overview: movie.overview,
    poster_path: movie.poster_path !== null ? `${POSTER_BASE_URL}${movie.poster_path}` : 'http://via.placeholder.com/500x750',
    release_date: movie.release_date.split('-').reverse().join('/'),
    popularity: movie.vote_average,
    votes: movie.vote_count,
    website: movie.homepage !== null ? movie.homepage : 'N/A'
})