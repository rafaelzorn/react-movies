import { getAllMovies } from '../../services/api/Movies';
import { FETCH_ALL_MOVIES } from '../types';

export function fetchAllMovies() {
    return async (dispatch) => {
        const movies = await getAllMovies('batman');

        const action = {
            type: FETCH_ALL_MOVIES,
            payload: movies.data.results
        };

        dispatch(action);
    };
}

