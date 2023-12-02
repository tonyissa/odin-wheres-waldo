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
  const [time, setTime] = useState(null);
  const [selected, setSelected] = useState({
    frost: false,
    slime: false,
    chatterskull: false
  });

  function toggleLeaderBoard() {
    setLeaderboard(!leaderboard);
  }

  function nextState() {
    if (state === 'setup' && round === 1) {
      setTime(Date.now());
      setState('game');
    } else if (state === 'game' && round === 3) {
      setTime((Date.now() - time) / 100);
      setState('setup');
      document.querySelector('.pop-up').classList.add('active');
    } else if (state === 'setup' && round === 3) {
      setRound(1);
      toggleLeaderBoard();
      document.querySelector('.pop-up').classList.remove('active');
    } else {
      setRound(round + 1);
      setState('setup');
    }
  }

  function getScore() {
    return Math.floor(10000 - time * 25);
  }

  return (
    <div id='app'>
      <div className='pop-up'>
        { leaderboard ? <Leaderboard nextState={nextState} /> : 
        <Dropdown toggleLeaderBoard={toggleLeaderBoard} time={time} nextState={nextState} getScore={getScore} /> }
      </div>
      { state === 'setup' ? <Setup nextState={nextState} round={round} selected={selected} /> : 
      <Game nextState={nextState} round={round} setSelected={setSelected} /> }
    </div>
  );
}