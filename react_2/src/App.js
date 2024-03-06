
import styles from './App.module.css';
import { useState } from 'react';

function Square({value}) {

  return <button className={styles.square} onClick={onSquareClick}>{value}</button>
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <>
      <div className={styles['board-row']}>
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className={styles['board-row']}>
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className={styles['board-row']}>
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
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
