import React, {useState}from 'react';

import './App.css';

function App() {
  const [text, setText] = useState("")


  function handleChange(e){
      const {value} = e.target
      setText(value)
  }

console.log(text)

  return (
    <div className="App">
        <h1>How fast can you type?</h1>
        <textarea
            onChange={handleChange}
            value={text}
        />
        <h4>Time Remaining</h4>
        <button>Start Game</button>
        <h1>Word Count Per minute</h1>
    </div>
  );
}

export default App;
