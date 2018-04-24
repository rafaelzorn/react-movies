import React from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../../../redux/actions'
import PropTypes from 'prop-types'

const FilterBar = props => {
    
    const filter = event => {
        event.preventDefault()
        props.fetchMovies(event.target.search.value)
    }

    return (
        <form className="form-inline" onSubmit={filter}>
            <input className="form-control mr-sm-2" name="search" type="search" placeholder="Search the movie..." aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    )
}

FilterBar.propTypes = {
    fetchMovies: PropTypes.func
}

export default connect(null, {fetchMovies})(FilterBar)
