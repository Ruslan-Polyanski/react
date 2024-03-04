
function Button({count, handlerIncrement}) {

  return (
    <>
      <button onClick={handlerIncrement}>Increment {count}</button>
    </>
  )
}

export { Button }