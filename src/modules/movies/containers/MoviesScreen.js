import React, { Component } from 'react'
import { Info, Warning } from '../../../global/components'
import CardMovie from '../components/CardMovie'
import ModalMovieDetails from '../components/ModalMovieDetails'
import { connect } from 'react-redux'
import { fetchMovies } from '../../../redux/actions'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroller'

class MoviesScreen extends Component {
    moreMovies = () => {
        this.props.fetchMovies(this.props.search, this.props.currentPage)
    }

    render() {
        return (
            <div className="container">         
                { this.props.search === '' ? <Info message="Enter the name of the movie in the search" /> :
                    <InfiniteScroll
                        className="row"
                        pageStart={1}
                        loadMore={this.moreMovies.bind(this)}
                        hasMore={this.props.hasMore}
                        loader={<Info className="row" key={0} message="Loading..." />}
                    >
                        {this.props.movies.map((movie, i) => <CardMovie key={i} movie={movie} />)}
                    </InfiniteScroll> }

                { this.props.movies.length === 0 && !this.props.hasMore ? <Warning message="OPS! No movies found." /> : null }

                <ModalMovieDetails />
            </div>
        )
    }
}

MoviesScreen.propTypes = {
    movies: PropTypes.array,
    search: PropTypes.string,
    fetchMovies: PropTypes.func,
    hasMore: PropTypes.bool,
    currentPage: PropTypes.number
}

const mapStateToProps = state => {
    return {
        movies: state.movies.list,
        search: state.movies.search,
        hasMore: state.movies.hasMore,
        currentPage: state.movies.currentPage
    }
}

export default connect(mapStateToProps, {fetchMovies})(MoviesScreen)
