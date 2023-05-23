/* eslint-disable react/prop-types */
import React from 'react';

export default function Dropdown(props) {

    function handleClick(e) {
        if (e.target.id === 'again') {
            props.restartTimer();
        } else {
            props.setLeaderBoardStatus(true);
        }
    }

    return <>
        <div><b>Nice!</b> You finished in {props.time.toFixed(2)} seconds for a total of {props.scoreTime(props.time)} points!</div>
        <div id="form">
            <label htmlFor="name">Name:</label>
            <input id="name" type='text' />
        </div>
        <div id='button-container'>
            <button onClick={handleClick}>Submit score</button>
            <button id="again" onClick={handleClick}>Start again</button>
        </div>
    </>;
}