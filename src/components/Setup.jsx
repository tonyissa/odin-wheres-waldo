/* eslint-disable react/prop-types */
import React from 'react';
import Frost from '../assets/Jack_Frost_SMTV_Art.webp';
import Slime from '../assets/Slime.webp';
import Chatterskull from '../assets/Chatterskull.webp';

export default function Setup(props) {

    function returnImg() {
        if (props.round === 1) {
            return Frost;
        } else if (props.round === 2) {
            return Slime;
        } else {
            return Chatterskull;
        }
    }

    function returnReady() {
        return props.round === 1 ? 'Are you ready?' : 'Great job!';
    }

    function returnText() {
        return props.round === 1 ? 'Find this lil fella:' : 'Now find this lil fella:';
    }

    return <div className="window">
          <div id="ready">{returnReady()}</div>
          <div id="img-container">
            <div>{returnText()}</div>
            <img src={returnImg()} />
          </div>
          <button onClick={props.nextState}>Go</button>
    </div>;
}