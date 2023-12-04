/* eslint-disable react/prop-types */
import React from 'react';
import collage from '../assets/collage.jpg';

export default function Game({ nextState, setSelected, selected, setError }) {

    async function handleClick(e) {
        try {
            const response = await fetch('http://localhost:3000/api/compare-coords', {
                mode: 'cors',
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    XCoord: e.nativeEvent.offsetX,
                    YCoord: e.nativeEvent.offsetY
                })
            });
            if (response.status === 202) {
                const parsed = await response.json();
                if (!selected[parsed.name]) {
                    setSelected({
                        ...selected,
                        [parsed.name]: true
                    });
                    nextState();
                } else {
                    setError('Character has already selected');
                }
            } else {
                setError('Location does not contain a character');
            }
        } catch (err) {
            console.error(err);
        }
    }

    return <div id="game">
        <img src={collage} onClick={handleClick} />
        <div id='frost-box'>
            <div className="box-mask"></div>
        </div>
    </div>;
}