/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react'; 
import { Scores } from '../firebaseConfig';

export default function Leaderboard(props) {
    return <div id="leaderboard">
        <div id='tagline'>Top scores:</div>
        <div id='table'>{Scores.map((item, index) => {
            return <div className='item'>
                <div>{index + 1}</div>
                <div>{item.name}</div>
                <div>{props.scoreTime(item.time)}</div>
            </div>;
        })}</div>
        <button onClick={props.restartTimer}>Restart</button>
    </div>;
}