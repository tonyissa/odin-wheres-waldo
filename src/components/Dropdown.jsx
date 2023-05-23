/* eslint-disable react/prop-types */
import React from 'react';
import { addDoc } from 'firebase/firestore';
import { colRef, getScores } from '../firebaseConfig';

export default function Dropdown(props) {

    function handleClick(e) {
        if (e.target.id === 'again') {
            props.restartTimer();
        } else {
            const submitScore = document.querySelector('#name');
            addDoc(colRef, {
                name: submitScore.value,
                time: props.time
            }).then(getScores())
            .then(() => {
                submitScore.value = '';
                props.toggleLeaderBoard();
            });
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