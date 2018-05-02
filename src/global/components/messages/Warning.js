import React from 'react'
import PropTypes from 'prop-types' 

const Warning = props => (
    <div className="col-12">
        <div className="alert alert-warning" role="alert">
            {props.message}
        </div>
    </div>
)
 
Warning.propTypes = {
    message: PropTypes.string
}

export default Warning
