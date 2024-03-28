import './App.css';
import { useState } from 'react';

function Squer({value, handleClick}) {
  return <button className="square" onClick={handleClick}>{value}</button>
}

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

  const buttons = stateMamory.map((value, index) => {
    return <button key={index} onClick={() => { getStep(index) }}>Get step {index}</button>
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

function App({squares, handleClick}) {

  return (
    <>
      <div className="board-row">
        <Squer value={squares[0]} handleClick={() => handleClick(0)} />
        <Squer value={squares[1]} handleClick={() => handleClick(1)} />
        <Squer value={squares[2]} handleClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Squer value={squares[3]} handleClick={() => handleClick(3)} />
        <Squer value={squares[4]} handleClick={() => handleClick(4)} />
        <Squer value={squares[5]} handleClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Squer value={squares[6]} handleClick={() => handleClick(6)} />
        <Squer value={squares[7]} handleClick={() => handleClick(7)} />
        <Squer value={squares[8]} handleClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function isVictory(squares) {

  const combination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8]
  ];

  for(let i = 0; i < combination.length; i++) {

    const [one, two, three] = combination[i];

    const result = squares[one] === squares[two] 
                   && squares[two] === squares[three] 
                   && squares[three] !== null;

    if(result) return squares[one];

  }
  
  return null;
}

export default WrapperApp;
