/* eslint-disable react/prop-types */
import React from 'react';
import collage from '../assets/collage.jpg';

export default function Game({ nextState, round, setSelected }) {

    async function handleClick(e) {
        // try {
        //     const response = await fetch('', {
        //         mode: 'cors',
        //         method: 'post',
        //         body: JSON.stringify({ 
        //             XCoords: e.nativeEvent.offsetX,
        //             YCoords: e.nativeEvent.offsetY
        //         })
        //     });
        //     if (response.status === 200) {
        //         setSelected({

        //         });
        //         nextState();
        //     }
        // } catch (err) {
        //     console.error(err);
        // }

        if (round === 1) {
            if (e.nativeEvent.offsetX >= 685 && e.nativeEvent.offsetX <= 732 &&
                e.nativeEvent.offsetY >= 682 && e.nativeEvent.offsetY <= 746) {
                    nextState();
                }
        } else if (round === 2) {
            if (e.nativeEvent.offsetX >= 155 && e.nativeEvent.offsetX <= 211 &&
                e.nativeEvent.offsetY >= 669 && e.nativeEvent.offsetY <= 726) {
                    nextState();
                }
        } else {
            if (e.nativeEvent.offsetX >= 22 && e.nativeEvent.offsetX <= 134 &&
                e.nativeEvent.offsetY >= 310 && e.nativeEvent.offsetY <= 461) {
                    nextState();
                }
        }
    }

    return <div id="game">
        <img src={collage} onClick={handleClick} />
    </div>;
}