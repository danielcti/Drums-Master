import React from 'react'
import {SoundF} from '../functions/sound'

const time = {
    'q': 2,
    'w': 1,
    'e': 5,
    'a': 1,
    's': 2,
    'd': 1,
    'z': 3,
    'x': 1,
    'c': 1,
}

const Player = (props) => {
     function handlePlay(){
        const sequence = props.sequence
        console.log(sequence)
        sequence.forEach( sound => {
            SoundF(sound)
            console.log('playing ', sound)
            // setTimeout(()=>{
            //     SoundF(sound)
            //     // console.log(`Playing sound ${sound}`)
            // }, time[sound]*1000)
        });

    }
    return (
        <div>
            <button onClick={handlePlay}>
            <h3>play</h3>
            </button>
        </div>
    );
}

export default Player;