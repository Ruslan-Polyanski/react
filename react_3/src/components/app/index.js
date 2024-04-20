
import { Squer } from '../squer';

export function App({squares, handleClick}) {

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

