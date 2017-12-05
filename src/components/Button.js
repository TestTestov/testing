import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props)
        this.addName = this.addName.bind(this)
    }

    addName = () => {
        let name = prompt('Enter name', '' )
        return name;
    }

    addUser = () => {
        this.props.addUser(this.addName())
    }

    addBot = () => {
        this.props.addBot(this.addName())
    }

    render() {
        return (
            <div className="btnWrap">
                <button className="addUser btn btnBig" onClick={this.addUser}>Add User</button>
                <button className="addBot btn btnBig" onClick={this.addBot}>Add _Bot</button>
            </div>
        );
    }
}

export default Button;
