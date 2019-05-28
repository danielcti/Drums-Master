import React, { Component } from 'react';
import Buttons from './components/Buttons';
// import Player from './components/Player'
import VolumeChanger from './components/VolumeChanger'
import './App.css';
import soundF from './functions/sound';

class App extends Component {
  sound = soundF
  constructor(props){
    super(props)
    this.sound = this.sound.bind(this)
    this.handleSound = this.handleSound.bind(this)
    this.state = {
      sequence: []
    }
  }

    _handleKeyDown = (event) => {
      let key = event.keyCode;
      let keyValue = String.fromCharCode(key).toLocaleLowerCase()

      let letters = /^[A-Za-z]+$/;
      if(keyValue.match(letters)){
        let newSequence = this.state.sequence
        newSequence.push(keyValue)
        this.setState({sequence: newSequence})  
      }
      
      this.sound(keyValue)
    }

  componentDidMount(){
      document.addEventListener("keydown", this._handleKeyDown);
  }

  componentWillUnmount() {
      document.removeEventListener("keydown", this._handleKeyDown);
  }this

  handleSound(sound){
    let letters = /^[A-Za-z]+$/;
    if(sound.match(letters)){
      let newSequence = this.state.sequence
      newSequence.push(sound)
      this.setState({sequence: newSequence})  
    }
  }
  

  render() {
    // console.log(this.state.sequence)
    return (
      <div className="App" >
        <h1>The drums game!</h1>
         <Buttons sound={this.sound} handleSound={this.handleSound}/>
         {/* <Player sequence={this.state.sequence}/> */}
         <VolumeChanger />
      </div>
    );
  }
}

export default App;
