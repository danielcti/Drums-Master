import React from 'react'
import './VolumeChanger.css'

const Player = (props) => {
     function handleVolumeChange(volume){
         let sounds = []
        for(let i = 1; i<=9; i++){
            sounds[i] = document.getElementById(`sound${i}`)
            sounds[i].volume = volume
        }
    }
    return (
        <div>
            <h3>Volume Control</h3>
            <input id='volume'
            type="range" 
            onChange={() => handleVolumeChange(document.getElementById('volume').value)}
            min='0'
            max='1'
            step='0.01'
            />
        </div>
    );
}

export default Player;