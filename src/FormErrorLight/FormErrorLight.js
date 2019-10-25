import React from 'react';
import PropTypes from 'prop-types';
import './FormErrorLight.css';

function FormError (props) {
    if (props.message) {
        return (
            <div className="error-message-light" aria-live="polite">
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