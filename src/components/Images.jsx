/* eslint-disable react/prop-types */
import React from 'react';
import Frost from '../assets/Jack_Frost_SMTV_Art.webp';
import FrostSelected from '../assets/Jack_Frost_SMTV_Art_Selected.webp';
import Slime from '../assets/Slime.webp';
import SlimeSelected from '../assets/Slime_selected.webp';
import Skull from '../assets/Chatterskull.webp';
import SkullSelected from '../assets/Chatterskull_Selected.webp';

export default function Images({ selected }) {
    return <>
        <img src={selected.frost ? FrostSelected : Frost} />
        <img src={selected.slime ? SlimeSelected : Slime} />
        <img src={selected.skull ? SkullSelected : Skull} />
    </>;
}