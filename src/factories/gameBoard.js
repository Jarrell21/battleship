const GameBoard = () => {
  const board = [];
  let numOfShipsSunk = 0;

  const getBoard = () => board;

  const createBoard = () => {
    for (let i = 0; i < 100; i += 1) {
      board.push({ ship: null, hasShip: false, isShot: false });
    }
  };

  const placeShip = (ship, index) => {
    if (board[index].hasShip === true) return;

    for (let i = 0; i < ship.getLength(); i += 1) {
      board[index + i].hasShip = true;
      board[index + i].ship = ship;
    }
  };

  const receiveAttack = (index) => {
    if (board[index].isShot === true) return;

    board[index].isShot = true;
    if (board[index].hasShip) {
      board[index].ship.hit();
      if (board[index].ship.isSunk()) {
        numOfShipsSunk += 1;
      }
    }
  };

  const allShipsAreSunk = () => numOfShipsSunk === 5;

  createBoard();
  return { getBoard, placeShip, receiveAttack, allShipsAreSunk };
};

export default GameBoard;
