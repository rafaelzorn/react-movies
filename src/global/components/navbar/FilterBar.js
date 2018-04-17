import React, { Component } from 'react';

export default class FilterBar extends Component {
    render() {
        return (    
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search the movie..." aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        );
    }
}