import React, {useState, useEffect, useRef}from 'react';
import useWordGame from "./hooks/useWordGame"
import './App.css';

function App() {

  const{
    inputRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startClock,
    wordCount
  } = useWordGame(5)

  return (
    <div className="App">
        <h1>How fast can you type?</h1>
        <form>
          <input
              ref={inputRef}
              onChange={handleChange}
              value={text}
              disabled={!isTimeRunning}

              />
              <h4>Time Remaining: {timeRemaining}</h4>
              <button
                onClick={startClock}
                disabled={isTimeRunning}
                >
                Start Game
              </button>
        </form>
        <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
