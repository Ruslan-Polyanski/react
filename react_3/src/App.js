import './App.css';
import { useState } from 'react';

function Squer({value, handleClick}) {

  return <button className="square" onClick={handleClick}>{value}</button>
}

function App() {

  const [isXNext, setNextPlayer] = useState(true);
  const [value, setValue] = useState('X');

  function handleClick() {
    if(isXNext) {
      setValue("X")
      setNextPlayer(false)
    } else {
      setValue("O")
      setNextPlayer(true)
    }
  }

  return (
    <>
      <div className="status">status</div>
      <div className="board-row">
        <Squer value={value} handleClick={() => handleClick(0)} />
        <Squer value={value} handleClick={() => handleClick(1)} />
        <Squer value={value} handleClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Squer value={value} handleClick={() => handleClick(3)} />
        <Squer value={value} handleClick={() => handleClick(4)} />
        <Squer value={value} handleClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Squer value={value} handleClick={() => handleClick(6)} />
        <Squer value={value} handleClick={() => handleClick(7)} />
        <Squer value={value} handleClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default App;
