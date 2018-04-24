import React from 'react'
import FilterBar from './FilterBar'
import styles from './styles/NavBar'

const NavBar = () => (
    <nav className="navbar navbar-light bg-light" style={styles.navbar}>
        <a className="navbar-brand">Movies</a>

        <FilterBar />
    </nav>
)

export default NavBar
