/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export default function Dropdown({ toggleLeaderboard, time, setTime, getScore }) {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function handleSubmit() {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch('', {
                mode: 'cors',
                method: 'post',
                body: { name }
            });
            setLoading(false);
            if (response.status === 200) {
                toggleLeaderboard();
            } else {
                setError('Request failed. Please try again.');
            }
        } catch (err) {
            console.error(err);
        }
    }

    return <>
        <div><b>Nice!</b> You finished in {time} seconds for a total of {getScore()} points!</div>
        <div id="form">
            <label htmlFor="name">Name:</label>
            <input id="name" type='text' onChange={e => setName(e.target.value)} />
        </div>
        <div id='button-container'>
            <button onClick={handleSubmit} disabled={loading}>Submit score</button>
            <button id="again" disabled={loading}>Start again</button>
        </div>
        <div className='error-text'>{error}</div>
    </>;
}