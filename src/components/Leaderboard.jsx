/* eslint-disable react/prop-types */
import React from 'react'; 

export default function Leaderboard(props) {
    return <div id="leaderboard">
        <div id='tagline'>Top scores:</div>
        <div id='table'>{props.scores.map((item, index) => {
            return <div className='item' key={item.id}>
                <div>{index + 1}</div>
                <div>{item.name}</div>
                <div>{props.scoreTime(item.time)}</div>
            </div>;
        })}</div>
        <button onClick={props.restartTimer}>Restart</button>
    </div>;
}