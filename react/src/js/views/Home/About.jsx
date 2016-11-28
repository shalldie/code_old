import React from 'react';

import { Link } from 'react-router';

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>About Page</h4>
                <p>This is the about page.</p>
            </div>

        );
    }
}