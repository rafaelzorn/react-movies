import React from 'react'
import PropTypes from 'prop-types'

const Info = props => (
    <div className="col-12">
        <div className="alert alert-primary" role="alert">
            {props.message}
        </div>
    </div>
)

Info.propTypes = {
    message: PropTypes.string
}

export default Info
