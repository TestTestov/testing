import React, { Component } from 'react';

class Paper extends Component {
    constructor(props) {
        super(props)
        this.news = null
        this.name = this.props.paper.name
        this.addManual = this.addManual.bind(this);
        this.addAuto = this.addAuto.bind(this);
        this.addServer = this.addServer.bind(this);
        this.onNewsChange = this.onNewsChange.bind(this);
    }

    addManual() {
        this.props.manual(this.props.paper, this.news)
    }

    addAuto() {
        this.props.auto(this.props.paper)
    }

    addServer() {
        this.props.server(this.props.paper)
    }

    onNewsChange(e) {
        this.news = e.target.value;
    }

    render() {
        return (
            <div className="paperWrap">
                <h3>{this.name}</h3>
                <textarea className="textNews" rows="3" id="1" onChange={this.onNewsChange}></textarea><br />
                <button className="addManual btn" onClick={this.addManual}>Manual</button>
                <button className="addAuto btn" onClick={this.addAuto}>Auto</button>
                <button className="addServer btn" onClick={this.addServer}>Server</button>
            </div>
        );
    }
}

export default Paper;