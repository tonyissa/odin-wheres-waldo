import React, { useState } from 'react';
import './style/App.css';
import Setup from './components/Setup';
import Game from './components/Game';
import Dropdown from './components/Dropdown';
import './firebaseConfig';

let time = 0;
let timer = setInterval(countUp, 100);

function countUp() {
  time += .10;
}

function stopTheCount() {
  clearInterval(timer);
}

export default function App() {
  const [state, setState] = useState('setup');
  const [round, setRound] = useState(1);
  const [popup, setPopup] = useState(false);

  function restartTimer() {
    setPopup(false);
    time = 0;
    timer = setInterval(countUp, 100);
  }

  function nextState() {
    if (state === 'setup') {
      setState('game');
    } else if (state === 'game' && round === 3) {
      stopTheCount();
      setRound(1);
      setState('setup');
      setPopup(true);
    } else {
      setRound(round + 1);
      setState('setup');
    }
  }

  return (
    <div id='app'>
      <Dropdown popup={popup} time={time} restartTimer={restartTimer} />
      {state === 'setup' ? <Setup nextState={nextState} round={round} /> :
      <Game nextState={nextState} round={round} />}
    </div>
  );
}