import styles from './index.module.css';
import { Button } from './Button';

function MyButton() {

  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <>
      <Button />
      <Button />
      <Button />
      <p>They hav own state</p>
      <button onClick={handleClick} className={styles['my-button']}>I'm a button</button>
    </>
  );

}


export { MyButton }