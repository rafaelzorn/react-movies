import React, { Component } from 'react'
import { connect } from 'react-redux'
import { search } from '../../../redux/actions'
import PropTypes from 'prop-types'

class FilterBar extends Component {

    _filter(event) {                   
        this.props.search(event.target.search.value)        
        event.preventDefault()
    }

    render() {
        return (    
            <form className="form-inline" onSubmit={this._filter.bind(this)}>
                <input className="form-control mr-sm-2" name="search" type="search" placeholder="Search the movie..." aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        )
    }
}

FilterBar.propTypes = {
    search: PropTypes.func
}

export default connect(null, {search})(FilterBar)
