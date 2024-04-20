
export function isVictory(squares) {

  const combination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8]
  ];

  for(let i = 0; i < combination.length; i++) {

    const [one, two, three] = combination[i];

    const result = squares[one] === squares[two] 
                   && squares[two] === squares[three] 
                   && squares[three] !== null;

    if(result) return squares[one];

  }
  
  return null;
}

