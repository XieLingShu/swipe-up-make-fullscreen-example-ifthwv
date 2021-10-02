import React, { useEffect, useState, useRef } from 'react';
import { render } from 'react-dom';
import GameCanvas from './GameCanvas';
import './style.css';

const App = () => {
  const [ showSwipeUp, setShowSwipeUp ] = useState(false);
  const gameContentClasses = showSwipeUp ? 'game-content hide' : 'game-content';
  const swipeUpClasses = showSwipeUp ? 'swipe-up show' : 'swipe-up';
  // check swipe up visible.
  useEffect(() => {
    const screenHeight = Math.min(window.screen.width, window.screen.height);
    const onCheckSwipeUp = () => {
      const show = screenHeight - window.innerHeight > 40;
      setShowSwipeUp(show);
    }
    setInterval(onCheckSwipeUp, 100);
    return () => {
      clearIntrerval(onCheckSwipeUp);
    }
  }, []);

  return (
    <div>
      <GameCanvas className="game-content"/>
      <div className={swipeUpClasses}>
        <span>swipe up</span>
      </div>
    </div>
  );
}

render(<App />, document.getElementById('root'));
