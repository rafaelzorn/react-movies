import { FETCH_ALL_MOVIES } from '../types';

export const INITIAL_STATE = {
    list: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ALL_MOVIES:
            return { ...state, list: action.payload };
        default:
            return state;
    }
};
