import styles from './index.module.css';
import { Button } from './Button';
import { useState } from 'react';


function MyButton() {
  const [count, setCount] = useState(0);

  function handlerIncrement() {
    setCount(count + 1)
  }


  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <>
      <Button count={count} handlerIncrement={handlerIncrement} />
      <Button count={count} handlerIncrement={handlerIncrement} />
      <Button count={count} handlerIncrement={handlerIncrement} />

      <p>They hav own state</p>
      <button onClick={handleClick} className={styles['my-button']}>I'm a button</button>
    </>
  );

}


export { MyButton }