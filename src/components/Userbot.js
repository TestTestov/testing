import React, { Component } from 'react';
import normal from "../normal.png";
import { dataSource } from "../index.js";

class Userbot extends Component {
    constructor(props){
        super(props)
        this.name = this.props.userName;
        this.delete = this.props.delete;
    }

    subsToPaper = (name) => {
        this.props.sub(name, this.name.name, this.name.type)
    }

    unsubsToPaper = (name) => {
        this.props.unsub(name, this.name.name, this.name.type)
    } 

    delUserBot = () => {
        this.delete(this.name['name'])
    }
    

    render() {
        return (
            <div className="userBotWrap">
                <h3>{this.name.type.toUpperCase()}: {this.name.name}</h3>
                <img src={normal} alt="https://hostadvice.com/wp-content/themes/bestwh/img/avatars/v2/normal.png"/>
                <button className="delUser" onClick={this.delUserBot}>X</button>
                <div className="displayNews">
                    {this.name.userNewsStore[this.name.userNewsStore.length-1]}
                </div>
                {/* 
                <div className="displayNews">
                    {this.name.userNewsStore.map((item, i) => 
                        <p className="newsBlock" newsitem={item} key={i}>{item}</p>)}
                </div> */}

                {this.props.dataSource.map((item, i) =>
                    <p sourcename={item} key={i} > 
                        <button className="subsc btn" onClick={this.subsToPaper(item.name)}>Subscribe to {item.name}</button>
                        <button className="unsubsc btn" onClick={this.unsubsToPaper}>Unsubscribe to {item.name}</button>
                    </p>
                 )}



            </div>

        );
    }
}

export default Userbot;