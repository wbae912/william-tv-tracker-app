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
                <div className="error-boundary" role="main">
                  <h1 className="error-boundary-h1">Something went wrong</h1>
                  <p className="error-boundary-p">Please refresh the page</p>
                </div>
            );
        }
        return this.props.children;
    }
}