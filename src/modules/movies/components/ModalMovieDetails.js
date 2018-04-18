import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import '../../../assets/css/custom-modal.css';
import styles from './styles/ModalMovieDetails';
import { formatMovieData } from '../utils/Movies';

export default class ModalMovieDetails extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data: {},
            open: false
        }
    }

    componentWillReceiveProps(nextProps) {        
        if (Object.keys(nextProps.details).length > 0) {
            this.setState({
                data: formatMovieData(nextProps.details),
                open: true
            });
        }
    }

    onCloseModal = () => {
        this.setState({
            open: false
        });
    };

    render() {
        const data = this.state.data;

        return (
            <div>
                <Modal open={this.state.open} onClose={this.onCloseModal} classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}>
                    <img src={data.poster_path} alt="Imagem" style={styles.image} />

                    <h2 style={ styles.title }>{data.original_title}</h2>

                    <p  style={ styles.text }>{data.overview}</p>

                    <dl className="row">
                        <dt className="col-sm-3">Release Date</dt>
                        <dd className="col-sm-9">{data.release_date}</dd>

                        <dt className="col-sm-3">Genres</dt>
                        <dd className="col-sm-9">{data.genres}</dd>

                        <dt className="col-sm-3">Popularity</dt>
                        <dd className="col-sm-9">{data.popularity} ({data.votes} Votes)</dd>

                        <dt className="col-sm-3">Website</dt>
                        <dd className="col-sm-9">{data.website}</dd>
                    </dl>
                </Modal>
            </div>
        );
    }
}