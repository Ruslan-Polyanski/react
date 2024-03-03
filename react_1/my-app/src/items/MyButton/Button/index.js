import { useState } from 'react';

function Button() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={handleIncrement}>Increment {count}</button>
    </>
  )
}

export { Button }