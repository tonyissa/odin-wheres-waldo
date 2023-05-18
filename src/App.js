import React, { useState } from 'react';
import './style/App.css';
import Setup from './components/Setup';
import Game from './components/Game';

export default function App() {
  const [state, setState] = useState('setup');

  function nextState() {
    state == 'setup' ? setState('game') : setState('state');
  }

  return (
    <div id='app'>
      {state == 'setup' ? <Setup nextState={nextState} /> : <Game />}
    </div>
  );
}
