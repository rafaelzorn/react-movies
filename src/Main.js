import React from 'react'
import { NavBar } from './global/components'
import MoviesScreen from './modules/movies/containers/MoviesScreen'

const Main = () => (
    <div>
        <NavBar />
        <MoviesScreen />
    </div>
)

export default Main