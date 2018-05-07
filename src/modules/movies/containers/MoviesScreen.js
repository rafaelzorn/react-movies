import React, { Component } from 'react'
import { Info } from '../../../global/components'
import CardMovie from '../components/CardMovie'
import ModalMovieDetails from '../components/ModalMovieDetails'
import { connect } from 'react-redux'
import { fetchMovies } from '../../../redux/actions'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroller'

class MoviesScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            currentPage: 1,
            hasMore: true
        }
    }

    componentWillReceiveProps(nextProps) {   
        if (nextProps.movies.length > 0) {
            this.setState({               
                movies: [ ...this.state.movies, ...nextProps.movies ],
                currentPage: this.state.currentPage + 1,
                hasMore: true
            })
        } else if (nextProps.movies.length === 0) {
            this.setState({                           
                hasMore: false
            })
        }
        
        if (nextProps.search !== this.props.search) {
            this.setState({
                movies: [],
                currentPage: 1,
                hasMore: true
            })
        }
    }

    moreMovies = () => {
        this.props.fetchMovies(this.props.search, this.state.currentPage)
    }

    _renderMovies = () => {
        if (this.props.search === '') {
            return <Info message="Enter the name of the movie in the search" />
        }

        return (
            <InfiniteScroll
                className="row"
                pageStart={1}
                loadMore={this.moreMovies.bind(this)}
                hasMore={this.state.hasMore}
                loader={<Info className="row" key={0} message="Loading..." />}
            >
                {this.state.movies.map((movie, i) => <CardMovie key={i} movie={movie} />)}
            </InfiniteScroll>
        )
    }

    render() {
        return (
            <div className="container">         
                {this._renderMovies()}

                <ModalMovieDetails />
            </div>
        )
    }
}

MoviesScreen.propTypes = {
    movies: PropTypes.array,
    search: PropTypes.string,
    fetchMovies: PropTypes.func
}

const mapStateToProps = state => {
    return {
        movies: state.movies.list,
        search: state.movies.search
    }
}

export default connect(mapStateToProps, {fetchMovies})(MoviesScreen)
