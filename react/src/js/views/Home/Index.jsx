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
                <h2>{history.state}</h2>
            </div>
        );
    }
}