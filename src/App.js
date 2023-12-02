import React, { useState } from 'react';
import './style/App.css';
import Setup from './components/Setup';
import Game from './components/Game';
import Dropdown from './components/Dropdown';

export default function App() {
  const [game, setGame] = useState(false);
  const [round, setRound] = useState(1);
  const [modal, setModal] = useState(false);
  const [leaderBoard, setLeaderBoard] = useState(false);
  const [time, setTime] = useState(null);
  const [selected, setSelected] = useState({
    frost: false,
    slime: false,
    chatterskull: false
  });

  function toggleLeaderBoard() {
    setLeaderBoard(!leaderBoard);
  }

  function nextState() {
    if (!game && round === 1) {
      setTime(Date.now());
      setGame(true);
    } else if (game && round === 3) {
      setTime(((Date.now() - time) / 1000).toFixed(2));
      setGame(false);
      setModal(true);
    } else if (!game) {
      setGame(true);
    } else {
      setRound(round + 1);
      setGame(false);
    }
  }

  function resetGame() {
    setRound(1);
    toggleLeaderBoard();
    setModal(false);
  }

  return (
    <div id='app'>
      <div className={'pop-up' + ' ' + (modal ? 'active' : '')}>
        <Dropdown leaderBoard={leaderBoard} toggleLeaderBoard={toggleLeaderBoard} time={time} nextState={nextState} resetGame={resetGame} />
      </div>
      { !game ? <Setup nextState={nextState} round={round} selected={selected} /> : 
      <Game nextState={nextState} round={round} setSelected={setSelected} /> }
    </div>
  );
}