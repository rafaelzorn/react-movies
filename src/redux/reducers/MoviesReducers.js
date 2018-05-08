import { FETCH_MOVIES, FETCH_MOVIE_DETAILS, OPEN_MODAL, SEARCH, HAS_MORE } from '../types'

export const INITIAL_STATE = {
    list: [],
    details: {},
    modal: false,
    search: '',
    hasMore: true
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return { ...state, list: action.payload }
        case FETCH_MOVIE_DETAILS:
            return { ...state, details: action.payload }
        case OPEN_MODAL:
            return { ...state, modal: action.payload }
        case SEARCH:
            return { ...state, search: action.payload, hasMore: true, list: [] }
        case HAS_MORE:
            return { ...state, hasMore: action.payload }
        default:
            return state
    }
}
