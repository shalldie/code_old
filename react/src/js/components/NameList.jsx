import React from 'react';
import addons from 'react-addons';

export default class NameList extends React.Component {
    /**
     * 默认传参
     * 
     * @static
     * 
     * @memberOf NameList
     */
    static defaultProps = {
        list: []
    }

    state = {
        list: []
    }

    constructor(props) {
        super(props);
        this.state.list = this.props.list;
    }

    handleAddName() {
        let eleInput = this.refs.inputName;
        let name = eleInput.value;
        let list = this.state.list;
        if (name.length && !~list.indexOf(name)) {
            list.push(name);
            this.setState({
                list: list
            });
        }
        eleInput.value = '';
    }

    handleDelete(index) {
        let list = this.state.list;
        list.splice(index, 1);
        this.setState({
            list: list
        });
    }

    render() {
        return (
            <div>
                <input type="text" ref="inputName" />
                <button onClick={this.handleAddName.bind(this)} type="button">Add</button>
                <ul>
                    {
                        this.state.list.map((name, index) => {
                            return <li key={index}>
                                <strong>{name}</strong>
                                <a onClick={this.handleDelete.bind(this, index)} href="javascript:void(0)">Delele</a>
                            </li>
                        })
                    }
                </ul>
            </div>
        );
    }

}