import React, { useState, useEffect } from 'react';
import './App.css';
import HitCount from './HitCount'
const App: React.FC = () => {
  const [count, changeCount] = useState(0)

  useEffect(() => {
    document.title = (`You clicked ${count} times!`)
  })

    return (
      <div>
        <button onClick={() => changeCount(count + 1)}>CLICKY</button>
        <button onClick={() => changeCount(count - 1)}>DECREMENT</button>
        <HitCount count={count} />
        <button onClick={() => changeCount(0)}>RESET</button>
      </div>
    )
  
}

export default App;
