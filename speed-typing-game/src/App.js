import React, {useState, useEffect}from 'react';

import './App.css';

function App() {
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(5)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordcount] = useState(0)


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
        <textarea
            onChange={handleChange}
            value={text}

        />
        <h4>Time Remaining: {timeRemaining}</h4>
        <button onClick={startClock}>Start Game</button>
        <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
