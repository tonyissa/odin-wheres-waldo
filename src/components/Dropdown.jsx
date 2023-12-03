/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import LeaderBoardComponent from './Leaderboard';

export default function Dropdown({ leaderboard, toggleLeaderboard, time, resetGame }) {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function handleSubmit() {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch('http://localhost:3000/api/upload-score', {
                mode: 'cors',
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, time })
            });
            setLoading(false);
            if (response.status === 200) {
                toggleLeaderboard();
            } else {
                const parsedJSON = await response.json();
                setError(parsedJSON.error);
            }
        } catch (err) {
            console.error(err);
        }
    }

    if (leaderboard) {
        return <LeaderBoardComponent />;
    }

    return <>
        <div><b>Nice!</b> You finished in {time} seconds!</div>
        <div id="form">
            <label htmlFor="name">Name:</label>
            <input id="name" type='text' onChange={e => setName(e.target.value)} />
        </div>
        <div id='button-container'>
            <button onClick={handleSubmit} disabled={loading}>Submit score</button>
            <button onClick={toggleLeaderboard} disabled={loading}>Leaderboards</button>
            <button id="again" onClick={resetGame} disabled={loading}>Start again</button>
        </div>
        <div className='error-text'>{error}</div>
    </>;
}