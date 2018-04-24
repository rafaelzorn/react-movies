import { getMovies, getMovieDetails } from '../../services/api/Movies'
import { FETCH_MOVIES, FETCH_MOVIE_DETAILS, OPEN_MODAL } from '../types'

export const fetchMovies = filter => {
    return async (dispatch) => {
        const movies = await getMovies(filter)

        const action = {
            type: FETCH_MOVIES,
            payload: movies.data.results
        }

        dispatch(action)
    }
}

export const fetchMovieDetails = id => {
    return async (dispatch) => {
        const details = await getMovieDetails(id)

        const action = {
            type: FETCH_MOVIE_DETAILS,
            payload: details.data
        }

        dispatch(action)
    }
}

export const openModal = open => ({
    type: OPEN_MODAL,
    payload: open
})
