import React from 'react';

import { Link } from 'react-router';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>Home Index Page</h4>
                <p>This is the index page.</p>
            </div>
        );
    }
}