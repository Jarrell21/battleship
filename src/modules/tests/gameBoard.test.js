import GameBoard from '../gameBoard';
import Ship from '../shipFactory';

test('place ship horizontally', () => {
  const board = GameBoard();
  const patrolBoat = Ship(2);

  board.placeShip(patrolBoat, 0);

  expect(board.getBoard()[0]).toStrictEqual({
    hasShip: true,
    isShot: false,
    ship: patrolBoat,
  });
  expect(board.getBoard()[1]).toStrictEqual({
    hasShip: true,
    isShot: false,
    ship: patrolBoat,
  });
});

test('place ship vertically', () => {
  const board = GameBoard();
  const patrolBoat = Ship(2);

  board.placeShip(patrolBoat, 0, true);

  expect(board.getBoard()[0]).toStrictEqual({
    hasShip: true,
    isShot: false,
    ship: patrolBoat,
  });
  expect(board.getBoard()[10]).toStrictEqual({
    hasShip: true,
    isShot: false,
    ship: patrolBoat,
  });
});

test('Ships cannot be placed if they dont fit the board horizontally', () => {
  const board = GameBoard();
  const carrier = Ship(5);

  board.placeShip(carrier, 6, false);

  expect(board.getBoard()[6]).not.toStrictEqual({
    hasShip: true,
    isShot: false,
    ship: carrier,
  });
});

test('Ships cannot be placed if they dont fit the board vertically', () => {
  const board = GameBoard();
  const carrier = Ship(5);

  board.placeShip(carrier, 60, true);

  expect(board.getBoard()[60]).not.toStrictEqual({
    hasShip: true,
    isShot: false,
    ship: carrier,
  });
});

test('Ships cannot be placed if coordinate is taken by another ship', () => {
  const board = GameBoard();
  const carrier = Ship(5);
  const patrolBoat = Ship(2);

  board.placeShip(carrier, 0, false);
  board.placeShip(patrolBoat, 1, false);

  expect(board.getBoard()[1]).toStrictEqual({
    hasShip: true,
    isShot: false,
    ship: carrier,
  });
});

test('Random place ships', () => {
  const board = GameBoard();

  board.randomPlaceShips();

  expect(board.getEmptyCoordinates()).toBe(83);
});

test('receive attack and hit', () => {
  const board = GameBoard();
  const patrolBoat = Ship(2);

  board.placeShip(patrolBoat, 1);
  board.receiveAttack(0);
  board.receiveAttack(1);
  board.receiveAttack(2);
  board.receiveAttack(3);

  expect(patrolBoat.getNumOfHits()).toBe(2);
});

test('receive attack and miss', () => {
  const board = GameBoard();
  const patrolBoat = Ship(2);

  board.placeShip(patrolBoat, 0);
  board.receiveAttack(0);
  board.receiveAttack(1);
  board.receiveAttack(2);

  expect(patrolBoat.getNumOfHits()).toBe(2);
  expect(board.getBoard()[0].isShot).toBeTruthy();
  expect(board.getBoard()[1].isShot).toBeTruthy();
  expect(board.getBoard()[2].isShot).toBeTruthy();
});

test('Reset board', () => {
  const board = GameBoard();
  const patrolBoat = Ship(2);

  board.placeShip(patrolBoat, 0);
  board.resetBoard();

  expect(board.getBoard()).not.toContainEqual({
    hasShip: true,
    isShot: false,
    ship: patrolBoat,
  });
});

test('All of the ships have sunk', () => {
  const board = GameBoard();
  const carrier = Ship(5);
  const battleship = Ship(4);
  const destroyer = Ship(3);
  const submarine = Ship(3);
  const patrolBoat = Ship(2);

  board.placeShip(carrier, 0, false);
  board.placeShip(battleship, 10, false);
  board.placeShip(destroyer, 20, false);
  board.placeShip(submarine, 30, false);
  board.placeShip(patrolBoat, 40, false);

  // function receiveAttackLoopVert(index, length) {
  //   for (let i = 0; i < length; i += 1) {
  //     board.receiveAttack(index + i * 10);
  //   }
  // }

  function receiveAttackLoopHori(index, length) {
    for (let i = 0; i < length; i += 1) {
      board.receiveAttack(index + i);
    }
  }

  // receiveAttackLoopVert(0, 5);
  // receiveAttackLoopVert(1, 4);
  // receiveAttackLoopVert(2, 3);
  // receiveAttackLoopVert(3, 3);
  // receiveAttackLoopVert(4, 2);

  receiveAttackLoopHori(0, 5);
  receiveAttackLoopHori(10, 4);
  receiveAttackLoopHori(20, 3);
  receiveAttackLoopHori(30, 3);
  receiveAttackLoopHori(40, 2);

  expect(board.allShipsHaveSunk()).toBeTruthy();
});
