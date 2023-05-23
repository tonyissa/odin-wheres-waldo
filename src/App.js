import React, { useState } from 'react';
import './style/App.css';
import Setup from './components/Setup';
import Game from './components/Game';
import Dropdown from './components/Dropdown';
import Leaderboard from './components/Leaderboard';
import { scores } from './firebaseConfig';

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
  const [leaderboard, setLeaderboard] = useState(false);

  function toggleLeaderBoard() {
    setLeaderboard(true);
  }

  function restartTimer() {
    document.querySelector('.pop-up').classList.remove('active');
    setLeaderboard(false);
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
      document.querySelector('.pop-up').classList.add('active');
    } else {
      setRound(round + 1);
      setState('setup');
    }
  }

  function scoreTime(x) {
    return Math.floor(1000 - 25 * x); 
}

  return (
    <div id='app'>
      <div className='pop-up'>
        {leaderboard ? <Leaderboard restartTimer={restartTimer} scores={scores} scoreTime={scoreTime} /> : 
        <Dropdown time={time} restartTimer={restartTimer} toggleLeaderBoard={toggleLeaderBoard} scoreTime={scoreTime} />}
      </div>
      {state === 'setup' ? <Setup nextState={nextState} round={round} /> : 
      <Game nextState={nextState} round={round} />}
    </div>
  );
}