import React, { Component } from 'react';
//Components
import Button from "./components/Button.js";
import Paper from "./components/Paper.js";
import Userbot from "./components/Userbot.js";





class App extends Component {
  constructor(props) {
    super(props)
    this.state  =  {}
  }

  update  =  ()  => {
    this.setState ({})
  }
  
  componentDidMount () {
    this.props.emit.subscribe( 'typeApp', this.update)
  }


 
  render() {    

    return (
      
      <div className  =  "wrap">
       
        {this.props.dataSource.map((item, i)  => <Paper 
            paper = {item}
            key = {i}
            manual = {this.props.control.addDataManual}
            auto = {this.props.control.addDataAuto}
            server = {this.props.control.addDataServer}
        />)}

        <Button
            addUser  =  {this.props.control.addUser} 
            addBot  =  {this.props.control.addBot}
        />

        {this.props.stor.userStorage.map((item, i)  => <Userbot 
            userName = {item} 
            key = {i}
            dataSource  =  {this.props.dataSource}
            sub = {this.props.control.subscribe}
            unsub = {this.props.control.unsubscribe}
            delete = {this.props.control.delUser}
        />)}
        
        {this.props.stor.botStorage.map((item, i)  => <Userbot
            userName = {item}
            key = {i}
            dataSource={this.props.dataSource}
            sub={this.props.control.subscribe}
            unsub={this.props.control.unsubscribe}
            delete = {this.props.control.delBot}
        />)}

      </div>
    );
  }
}

export default App;
