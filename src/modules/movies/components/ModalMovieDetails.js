import React, { Component } from 'react'
import Modal from 'react-responsive-modal'
import '../../../assets/css/custom-modal.css'
import styles from './styles/ModalMovieDetails'
import { formatMovieData } from '../utils/Movies'
import { connect } from 'react-redux'
import { openModal } from '../../../redux/actions'
import PropTypes from 'prop-types'

class ModalMovieDetails extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data: {}
        }
    }

    componentWillReceiveProps(nextProps) {              
        if (Object.keys(nextProps.details).length > 0) {
            this.setState({
                data: formatMovieData(nextProps.details)
            })
        }
    }

    _onCloseModal = () => {
        this.props.openModal(false)
    };

    render() {
        const data = this.state.data

        return (
            <div>
                <Modal open={this.props.open} onClose={this._onCloseModal} classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}>
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
                        <dd className="col-sm-9"><a target="_blank" href={data.website}>{data.website}</a></dd>
                    </dl>
                </Modal>
            </div>
        )
    }
}

ModalMovieDetails.propTypes = {
    details: PropTypes.object,
    openModal: PropTypes.func,
    open: PropTypes.bool
}

const mapStateToProps = state => {
    return {
        open: state.movies.modal,
        details: state.movies.details
    }
}

export default connect(mapStateToProps, {openModal})(ModalMovieDetails)
