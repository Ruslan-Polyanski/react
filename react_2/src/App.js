
import styles from './App.module.css';
import { useState } from 'react';


function Square({value, onSquareClick}) {

  return <button className={styles.square} onClick={onSquareClick}>{value}</button>
}


function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handlerClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = 'X';
    setSquares(nextSquares)
  }

  return (
    <>
      <div className={styles['board-row']}>
        <Square value={squares[0]} onSquareClick={() => { handlerClick(0) }} />
        <Square value={squares[1]} onSquareClick={() => { handlerClick(1) }} />
        <Square value={squares[2]} onSquareClick={() => { handlerClick(2) }} />
      </div>
      <div className={styles['board-row']}>
        <Square value={squares[3]} onSquareClick={() => { handlerClick(3) }} />
        <Square value={squares[4]} onSquareClick={() => { handlerClick(4) }} />
        <Square value={squares[5]} onSquareClick={() => { handlerClick(5) }} />
      </div>
      <div className={styles['board-row']}>
        <Square value={squares[6]} onSquareClick={() => { handlerClick(6) }} />
        <Square value={squares[7]} onSquareClick={() => { handlerClick(7) }} />
        <Square value={squares[8]} onSquareClick={() => { handlerClick(8) }} />
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <Board />
    </>
  );
}

export default App;
