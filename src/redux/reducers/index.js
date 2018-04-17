import { combineReducers } from 'redux';
import MoviesReducers from './MoviesReducers';

export const rootReducer = combineReducers({
    movies: MoviesReducers
});
