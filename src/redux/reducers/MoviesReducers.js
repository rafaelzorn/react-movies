import { FETCH_MOVIES, FETCH_MOVIE_DETAILS, OPEN_MODAL } from '../types';

export const INITIAL_STATE = {
    list: [],
    details: {},
    modal: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return { ...state, list: action.payload };
        case FETCH_MOVIE_DETAILS:
            return { ...state, details: action.payload };
        case OPEN_MODAL:
            return { ...state, modal: action.payload };
        default:
            return state;
    }
};
