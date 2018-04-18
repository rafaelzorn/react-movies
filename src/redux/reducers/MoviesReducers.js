import { FETCH_MOVIES, FETCH_MOVIE_DETAILS } from '../types';

export const INITIAL_STATE = {
    list: [],
    details: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return { ...state, list: action.payload };
        case FETCH_MOVIE_DETAILS:
            return { ...state, details: action.payload };
        default:
            return state;
    }
};
