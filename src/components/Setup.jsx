/* eslint-disable react/prop-types */
import React from 'react';
import Frost from '../assets/Jack_Frost_SMTV_Art.webp';

export default function Setup(props) {

    return <div className="window">
          <div id="ready">Are you ready?</div>
          <div id="img-container">
            <div>Find this lil fella:</div>
            <img src={Frost}></img>
          </div>
          <button onClick={props.nextState}>Go</button>
    </div>;
}