import React, { Component } from 'react';
import Buttons from './components/Buttons';
import './App.css';
import soundF from './functions/sound';
class App extends Component {
  sound = soundF
  constructor(props){
    super(props)
    this.sound = this.sound.bind(this)
  }

    _handleKeyDown = (event) => {
      let key = event.keyCode;
      let keyValue = String.fromCharCode(key).toLocaleLowerCase()
      this.sound(keyValue)
  }

  componentDidMount(){
      document.addEventListener("keydown", this._handleKeyDown);
  }

  componentWillUnmount() {
      document.removeEventListener("keydown", this._handleKeyDown);
  }

  render() {
    return (
      <div className="App" >
        <h1>The drums game!</h1>
         <Buttons sound={this.sound}/>
      </div>
    );
  }
}

export default App;
