const GameBoard = () => {
  let board = [];
  let numOfShipsSunk = 0;
  const placedShipCoord = [];

  const getBoard = () => board;

  const createBoard = () => {
    for (let i = 0; i < 100; i += 1) {
      board.push({ ship: null, hasShip: false, isShot: false });
    }
  };

  const resetBoard = () => {
    board = [];
    createBoard();
  };

  const placeShip = (ship, index) => {
    if (board[index].hasShip === true) return;

    placedShipCoord.push(index + ship.getLength());
    for (let i = 0; i < ship.getLength(); i += 1) {
      placedShipCoord.push(index + i);
      board[index + i].hasShip = true;
      board[index + i].ship = ship;
    }
  };

  // const randomPlaceShip = (ship) => {
  //   let index = Math.floor(Math.random() * 10);

  //   while (isAlreadyTaken(index, board[index].ship)) {
  //     index = Math.floor(Math.random() * 10);
  //   }

  //   for (let i = 0; i < ship.getLength(); i += 1) {
  //     placedShipCoord.push(index + i);
  //     board[index + i].hasShip = true;
  //     board[index + i].ship = ship;
  //   }
  // };

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

  // const isAlreadyTaken = (index, ship) => {
  //   const shipCoordinates = [];
  //   for (let i = 0; i < ship.getLength(); i += 1) {

  //   }
  // };

  const allShipsAreSunk = () => numOfShipsSunk === 5;

  createBoard();
  return {
    getBoard,
    placeShip,
    // randomPlaceShip,
    receiveAttack,
    allShipsAreSunk,
    resetBoard,
  };
};

export default GameBoard;
