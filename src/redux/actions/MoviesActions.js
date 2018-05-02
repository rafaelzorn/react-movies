import { getMovies, getMovieDetails } from '../../services/api/Movies'
import { FETCH_MOVIES, FETCH_MOVIE_DETAILS, OPEN_MODAL, SEARCH } from '../types'

export const fetchMovies = text => {
    return async (dispatch) => {
        if (text === '') {
            _search(false, dispatch)
            return false
        }

        const movies = await getMovies(text)

        const action = {
            type: FETCH_MOVIES,
            payload: movies.data.results
        }

        dispatch(action)

        _search(true, dispatch)
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

const _search = (search, dispatch) => (
    dispatch ({
        type: SEARCH,
        payload: search
    })
)
