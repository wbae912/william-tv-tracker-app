import React from 'react';
import PropTypes from 'prop-types';
import './FormError.css';

function FormError (props) {
    if (props.message) {
        return (
            <div className="error-message">
                {props.message}
            </div>
        );
    }
    return <></>
}

export default FormError;

FormError.propTypes = {
    message: PropTypes.string
}