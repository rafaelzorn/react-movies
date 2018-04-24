import React, { Component } from 'react';
import { formatMovieData } from '../utils/Movies';
import { connect } from 'react-redux';
import { fetchMovieDetails, openModal } from '../../../redux/actions';

const styles = {
    card: {
        marginBottom: 10,
        boxShadow: '0px 0px 15px #909090'
    }
}

class CardMovie extends Component {
    _modal(id) {        
        this.props.fetchMovieDetails(id)
    }
    
    componentWillReceiveProps(nextProps) {   
        if (Object.keys(nextProps.details).length > 0) {
            this.props.openModal(true);
        }
    }

    render() {        
        const data = formatMovieData(this.props.movie);

        return (
            <div className="col-md-4 col-sm-6">
                <div className="card" style={styles.card}>
                    <img className="card-img-top" src={data.poster_path} alt="Imagem" />
                    <div className="card-body">
                        <h5 className="card-title">{data.original_title}</h5>
                        <p className="card-text">{data.overview}</p>
                        
                        <button type="button" className="btn btn-primary" onClick={this._modal.bind(this, data.id)}>
                            See more
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        details: state.movies.details
    };
};

export default connect(mapStateToProps, {fetchMovieDetails, openModal})(CardMovie);