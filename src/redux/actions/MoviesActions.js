import { getMovies, getMovieDetails } from '../../services/api/Movies'
import { FETCH_MOVIES, FETCH_MOVIE_DETAILS, OPEN_MODAL, SEARCH } from '../types'

export const fetchMovies = (term, page) => {
    return async (dispatch) => {
        if (term === '') {
            return false
        }

        const movies = await getMovies(term, page)

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

export const search = term => ({
    type: SEARCH,
    payload: term
})

