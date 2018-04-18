import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllMovies } from '../../../redux/actions';

export class FilterBar extends Component {
    filter(event) {           
        const search = event.target.search.value;
        this.props.fetchAllMovies(search);

        event.preventDefault();
    }

    render() {
        return (    
            <form className="form-inline" onSubmit={this.filter.bind(this)}>
                <input className="form-control mr-sm-2" name="search" type="search" placeholder="Search the movie..." aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, {fetchAllMovies})(FilterBar);