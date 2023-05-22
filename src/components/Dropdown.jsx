/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

export default function Dropdown(props) {
    
    useEffect(() => {
        if (props.popup) {
            document.querySelector('.pop-up').classList.add('active');
        }
    }, [props.popup]);

    function handleClick(e) {
        if (e.target.id === 'again') {
            document.querySelector('.pop-up').classList.remove('active');
            props.restartTimer();
        } else {

        }
    }

    function scoreTimer(x) {
        return Math.floor(1000 - 25 * x); 
    }

    function handleRender() {
        if (props.popup) {
            return <>
                <div><b>Nice!</b> You finished in {props.time.toFixed(2)} seconds for a total of {scoreTimer(props.time)} points!</div>
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
    }

    return <div className='pop-up'>
        {handleRender()}
    </div>;
}