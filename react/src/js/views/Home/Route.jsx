import React from 'react';
import { Link } from 'react-router';

export default class Route extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/" name={'hello'}>首页</Link></li>
                    <li><Link to="/home/about">关于</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}