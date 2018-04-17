import React, { Component } from 'react';
import FilterBar from './FilterBar';
import styles from './styles/NavBar';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light" style={styles.navbar}>
                <a className="navbar-brand">Movies</a>

                <FilterBar />
            </nav>
        );
    }
}