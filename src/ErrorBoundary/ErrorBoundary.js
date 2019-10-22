import React, { Component } from 'react';
import './ErrorBoundary.css';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: false
        }
    }

    static getDerivedStateFromError(error) {
        return { error: true };
    }

    render() {
        if (this.state.error) {
            return (
                <>
                  <h2 className="error-boundary-h2">Something went wrong</h2>
                  <p className="error-boundary-p">Please refresh the page</p>
                </>
            );
        }
        return this.props.children;
    }
}