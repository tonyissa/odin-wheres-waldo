import React, { useState } from 'react';
import './style/App.css';
import Setup from './components/Setup';
import Game from './components/Game';
import Dropdown from './components/Dropdown';
import Leaderboard from './components/Leaderboard';

export default function App() {
  const [state, setState] = useState('setup');
  const [round, setRound] = useState(1);
  const [leaderboard, setLeaderboard] = useState(false);

  function toggleLeaderBoard() {
    setLeaderboard(true);
  }

  function nextState() {
    if (state === 'setup') {
      setState('game');
    } else if (state === 'game' && round === 3) {
      setRound(1);
      setState('setup');
      document.querySelector('.pop-up').classList.add('active');
    } else {
      setRound(round + 1);
      setState('setup');
    }
  }

  return (
    <div id='app'>
      <div className='pop-up'>
        {leaderboard ? <Leaderboard /> : 
        <Dropdown toggleLeaderBoard={toggleLeaderBoard} />}
      </div>
      {state === 'setup' ? <Setup nextState={nextState} round={round} /> : 
      <Game nextState={nextState} round={round} />}
    </div>
  );
}