/* eslint-disable react/prop-types */
import React from 'react';

export default function Dropdown(props) {

    return <>
        <div><b>Nice!</b> You finished in ___ seconds for a total of ___ points!</div>
        <div id="form">
            <label htmlFor="name">Name:</label>
            <input id="name" type='text' />
        </div>
        <div id='button-container'>
            <button>Submit score</button>
            <button id="again">Start again</button>
        </div>
    </>;
}