import React, { Component } from 'react';
import { NavBar } from './global/components';
import MoviesScreen from './modules/movies/containers/MoviesScreen';

export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <MoviesScreen />
            </div>
        );
    }
}
