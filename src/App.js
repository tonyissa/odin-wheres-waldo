import React, { useState } from 'react';
import './style/App.css';
import Setup from './components/Setup';
import Game from './components/Game';

export default function App() {
  const [state, setState] = useState('setup');
  const [round, setRound] = useState(1);
  const [popup, setPopup] = useState(false);

  function nextState() {
    if (state === 'setup') {
      setState('game');
    } else if (state === 'game' && round === 3) {
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
      {state === 'setup' ? <Setup nextState={nextState} round={round} popup={popup}/> : <Game nextState={nextState} round={round} />}
    </div>
  );
}