import React, { Component } from 'react';
import CardMovie from '../components/CardMovie';
import ModalMovieDetails from '../components/ModalMovieDetails';
import { connect } from 'react-redux';
import { fetchAllMovies } from '../../../redux/actions';

export class MoviesScreen extends Component {
    constructor(props) {
        super(props);    		
		this.state = {
			movies: []
		};
    }

    componentDidMount() {
        this.props.fetchMovies();   
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.movies.length !== this.props.movies.length) {
            this.setState({
				movies: nextProps.movies
			});
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">  
                    {this.state.movies.map(movie =>
                        <CardMovie key={movie.id} movie={movie} />
                    )}
                    
                    <ModalMovieDetails />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies.list
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: () => dispatch(fetchAllMovies())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesScreen);