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

export class CardMovie extends Component {
    modal(id) {        
        this.props.fetchMovieDetails(id)
        this.props.openModal(true);
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
                        
                        <button type="button" className="btn btn-primary" onClick={this.modal.bind(this, data.id)}>
                            See more
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, {fetchMovieDetails, openModal})(CardMovie);