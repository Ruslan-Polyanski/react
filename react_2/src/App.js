
import styles from './App.module.css';
import { useState } from 'react';

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X')
  }

  return <button className={styles.square} onClick={handleClick}>{value}</button>
}

function Board() {
  return (
    <>
      <div className={styles['board-row']}>
        <Square />
        <Square />
        <Square />
      </div>
      <div className={styles['board-row']}>
        <Square />
        <Square />
        <Square />
      </div>
      <div className={styles['board-row']}>
        <Square />
        <Square />
        <Square />
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
