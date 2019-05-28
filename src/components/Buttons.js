import React, { Component } from 'react';
import './Buttons.css'

class Buttons extends Component {
    handleClickQ = () => {
        this.props.sound('q')
        this.props.handleSound('q')
    }

    handleClickW = () => {
        this.props.sound('w')
        this.props.handleSound('w')
    }

    handleClickE = () => {
        this.props.sound('e')
        this.props.handleSound('e')
    }

    handleClickA = () => {
        this.props.sound('a')
        this.props.handleSound('a')
    }

    handleClickS = () => {
        this.props.sound('s')
        this.props.handleSound('s')
    }

    handleClickD = () => {
        this.props.sound('d')
        this.props.handleSound('d')
    }

    handleClickZ = () => {
        this.props.sound('z')
        this.props.handleSound('z')
    }

    handleClickX = () => {
        this.props.sound('x')
        this.props.handleSound('x')
    }

    handleClickC = () => {
        this.props.sound('c')
        this.props.handleSound('c')
    }

    render(){
        return (
            <div className='container-fluid'>
                <div className="btn-group fst" role="group" aria-label="Basic example">
                <button onClick = {this.handleClickQ} type="button" className="btn btn-primary btn-lg q">Q</button>
                <button onClick = {this.handleClickW} type="button" className="btn btn-primary btn-lg w">W</button>
                <button onClick = {this.handleClickE} type="button" className="btn btn-primary btn-lg e">E</button>
                </div>
                <br/>
                <div className="btn-group snd" role="group" aria-label="Basic example">
                <button onClick = {this.handleClickA} type="button" className="btn btn-primary btn-lg a">A</button>
                <button onClick = {this.handleClickS} type="button" className="btn btn-primary btn-lg s">S</button>
                <button onClick = {this.handleClickD} type="button" className="btn btn-primary btn-lg d">D</button>
                </div>
                <br/>
                <div className="btn-group trd" role="group" aria-label="Basic example">
                <button onClick = {this.handleClickZ} type="button" className="btn btn-primary btn-lg z">Z</button>
                <button onClick = {this.handleClickX} type="button" className="btn btn-primary btn-lg x">X</button>
                <button onClick = {this.handleClickC} type="button" className="btn btn-primary btn-lg c">C</button>
                </div>
            </div>
          );      
    }
}

export default Buttons;