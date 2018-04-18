import React, { Component } from 'react';
import { NoMoviesFound } from '../../../global/components'
import CardMovie from '../components/CardMovie';
import ModalMovieDetails from '../components/ModalMovieDetails';
import { connect } from 'react-redux';

export class MoviesScreen extends Component {
    constructor(props) {
        super(props);    		
		this.state = {
			movies: []
		};
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.movies.length > 0 ) {
            this.setState({
				movies: nextProps.movies
			});
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">  
                    {this.state.movies.length > 0 ? this.state.movies.map(movie => <CardMovie key={movie.id} movie={movie} />) : <NoMoviesFound />}
                    
                    <ModalMovieDetails details={this.props.details} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies.list,
        details: state.movies.details
    };
};

export default connect(mapStateToProps, {})(MoviesScreen);