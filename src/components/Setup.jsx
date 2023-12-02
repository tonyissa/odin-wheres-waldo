/* eslint-disable react/prop-types */
import React from 'react';
import Images from './Images';

export default function Setup({ nextState, round, selected }) {

    function returnReady() {
        return round === 1 ? 'Are you ready?' : 'Great job!';
    }

    function returnText() {
            if (round === 1) {
                return 'Find these absolute goofballs:';
            } else if (round === 2) {
                return 'One down, two to go';
            } else {
                return 'Last one! Good luck';
            }
    }

    return <>
        <div className="window">
            <div id="ready">{returnReady()}</div>
            <div>{returnText()}</div>
            <div id="img-container">
                <Images selected={selected} />
            </div>
            <button onClick={nextState}>Go</button>
        </div>
    </>;
}