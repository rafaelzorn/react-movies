import React, { Component } from 'react';
import { POSTER_BASE_URL } from '../../../services/api/Movies'

const styles = {
    card: {
        marginBottom: 10
    }
}

export default class CardMovie extends Component {
    movieDetails() {
        alert('modal');
    }
    
    render() {        
        const movie = this.props.movie;
        const posterPath = `${POSTER_BASE_URL}${movie.poster_path}`;

        return (
            <div className="col-md-4 col-sm-6">
                <div className="card" style={styles.card}>
                    <img className="card-img-top" src={posterPath} alt="Imagem" />
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">{movie.overview}</p>
                        
                        <button type="button" className="btn btn-primary" onClick={this.movieDetails}>
                            See more
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
