import './App.css';
import { useState } from 'react';

import {App} from './components/app';
import { isVictory } from './utilits/isVictory';


function WrapperApp() {
  const [stateMamory, setStateMamory] = useState([Array(9).fill(null)]);
  const [squares, setSquares] = useState(0);

  const showSquares = stateMamory[squares];

  const isXNext = squares % 2 === 0;

  const value = isXNext ? 'X' : 'O';

  const status = isVictory(showSquares) ? `Winner ${isVictory(showSquares)}` : `Next player: ${value}`;

  function handleClick(index) {

    if(!showSquares[index] && !isVictory(showSquares)) {

      const newSquares = [...showSquares];
      newSquares[index] = value;

      const newStateMamory = [...stateMamory.slice(0, squares + 1), [...newSquares]];
    
      setStateMamory(newStateMamory)
      setSquares(newStateMamory.length - 1)
      
    }

  }

  function getStep(index) {
    setSquares(index)
  }

  const buttons = stateMamory.map((value, index, array) => {
    if(index === array.length - 1) {
      return <>“You are at move #{index}”</>
    } else {
      return <button key={index} onClick={() => { getStep(index) }}>Get step {index}</button>;
    }
  })


  return (
    <>
      <div className="status">{status}</div>
      <App squares={showSquares} handleClick={handleClick} />
      <div className="buttons">
        {buttons}
      </div>
    </>
  )

}


export default WrapperApp;
