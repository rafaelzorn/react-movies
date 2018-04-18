import React, { Component } from 'react';

export default class NoMoviesFound extends Component {
    render() {
        return (
            <div className="col-12">
                <div className="alert alert-primary" role="alert">
                    Enter the name of the movie in the search <b>:)</b>
                </div>
            </div>
        );
    }
}