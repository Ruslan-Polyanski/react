
import styles from './App.module.css';
import { useState } from 'react';


function Square({value, onSquareClick}) {

  return <button className={styles.square} onClick={onSquareClick}>{value}</button>
}


function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  let status;
  if(winner) {
    status = "Winner " + winner;
  } else {
    status = "Next player " + (xIsNext ? "X" : "O");
  }

  function handlerClick(i) {
    if(squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();

    if(xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  return (
    <>
      <div className="status">{status}</div>
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

function calculateWinner(squares) {
  
    const line = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for(let i = 0; i < line.length; ++i) {
        const [a, b, c] = line[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        } 
      }

    return null;
}

function App() {
  return (
    <>
      <Board />
    </>
  );
}

export default App;
