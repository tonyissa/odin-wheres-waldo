/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

export default function Leaderboard({ resetGame, toggleLeaderboard }) {
    const [scores, setScores] = useState();

    useEffect(() => {
        async function fetchScores() {
            try {
                const response = await fetch('http://localhost:3000/api/scores', {
                    mode: 'cors'
                });
                setScores(await response.json());
            } catch (err) {
                console.log(err);
            }
        }

        fetchScores();
    }, []);

    function handleReset() {
        toggleLeaderboard();
        resetGame();
    }

    if (scores) {
        return <div id="leaderboard">
            <div id='tagline'>Top scores:</div>
            <div id='table'>{scores.map((item, index) => {
                return <div className='item' key={item._id}>
                    <div>{index + 1}</div>
                    <div>{item.name}</div>
                    <div>{item.time}</div>
                </div>;
            })}</div>
            <button onClick={handleReset}>Restart</button>
        </div>;
    }
}