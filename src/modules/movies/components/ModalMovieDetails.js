import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import '../../../assets/css/custom-modal.css';
import styles from './styles/ModalMovieDetails';

export default class ModalMovieDetails extends Component {
    state = {
        open: false,
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        const image = 'http://www.cafecomfilme.com.br/media/k2/items/cache/5864d1f09c419e58c64901cc14198f89_XL.jpg';

        return (
            <div>
                <Modal open={open} onClose={this.onCloseModal} classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}>                    
                    <img src={image} alt="Imagem" style={styles.image} />

                    <h2 style={ styles.title }>The Goonies</h2>

                    <p  style={ styles.text }>A young teenager named Mikey Walsh finds an old treasure map in his fathers attic. Hoping to save their homes from demolition, Mikey and his friends Data Wang, Chunk Cohen, and Mouth Devereaux run off on a big quest to find the secret stash of Pirate One-Eyed Willie.</p>

                    <dl className="row">
                        <dt className="col-sm-3">Release Date</dt>
                        <dd className="col-sm-9">10/10/1985</dd>

                        <dt className="col-sm-3">Genres</dt>
                        <dd className="col-sm-9">Adventure</dd>

                        <dt className="col-sm-3">Popularity</dt>
                        <dd className="col-sm-9">6.9 (5553 Votes)</dd>
                    </dl>
                </Modal>
            </div>
        );
    }
}
