import React, {useState, useEffect, useRef}from 'react';

import './App.css';

function App() {
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(5)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordcount] = useState(0)
  const inputRef = useRef(null)


  function handleChange(e){
      const {value} = e.target
      setText(value)
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ")
    return wordsArr.filter(word => word !== "").length

  }

  function startClock(){
    setIsTimeRunning(true)
    setTimeRemaining(5)
    setText("")
    inputRef.current.disabled = false
    inputRef.current.focus()
  }

  function endGame() {
    const numWords = calculateWordCount(text)
    //console.log(numWords)
    setWordcount(numWords)
  }

  useEffect(()=> {
    if(isTimeRunning && timeRemaining > 0){
      setTimeout(() => {
        setTimeRemaining(time => time-1 )
      }, 1000)
    }else if(timeRemaining === 0){
      setIsTimeRunning(false)
      endGame()
    }
  }, [timeRemaining, isTimeRunning])



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
