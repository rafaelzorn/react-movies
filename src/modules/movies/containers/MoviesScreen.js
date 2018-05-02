import React, { Component } from 'react'
import { Info, Warning } from '../../../global/components'
import CardMovie from '../components/CardMovie'
import ModalMovieDetails from '../components/ModalMovieDetails'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class MoviesScreen extends Component {
    
    _renderMovies = () => {
        if (!this.props.search) {
            return <Info message="Enter the name of the movie in the search" />
        }
 
        if (this.props.search && this.props.movies.length <= 0) {
            return <Warning message="Movies not found" />
        }
 
        return this.props.movies.map(movie => <CardMovie key={movie.id} movie={movie} />)
    }

    render() {
        return (
            <div className="container">
                <div className="row">                      
                    {this._renderMovies()}

                    <ModalMovieDetails />
                </div>
            </div>
        )
    }
}

MoviesScreen.propTypes = {
    movies: PropTypes.array,
    search: PropTypes.bool
}

const mapStateToProps = state => {
    return {
        movies: state.movies.list,
        search: state.movies.search
    }
}

export default connect(mapStateToProps, {})(MoviesScreen)
