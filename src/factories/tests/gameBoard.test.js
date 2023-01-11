import GameBoard from '../gameBoard';
import Ship from '../shipFactory';

test('place ship at specific coordinates', () => {
  const board = GameBoard();
  const carrier = Ship(5);

  board.placeShip(carrier, 0);

  expect(board.getBoard()).toContainEqual({
    hasShip: true,
    isShot: false,
    ship: carrier,
  });
});

test('receive attack and hit', () => {
  const board = GameBoard();
  const carrier = Ship(5);

  board.placeShip(carrier, 1);
  board.receiveAttack(1);
  board.receiveAttack(2);
  board.receiveAttack(3);
  board.receiveAttack(4);
  board.receiveAttack(5);
  board.receiveAttack(6);

  expect(carrier.getNumOfHits()).toBe(5);
});

test('receive attack and miss', () => {
  const board = GameBoard();
  const carrier = Ship(5);

  board.placeShip(carrier, 0);
  board.receiveAttack(0);
  board.receiveAttack(1);
  board.receiveAttack(7);
  board.receiveAttack(8);

  expect(carrier.getNumOfHits()).toBe(2);
  expect(board.getBoard()[0].isShot).toBeTruthy();
  expect(board.getBoard()[1].isShot).toBeTruthy();
  expect(board.getBoard()[7].isShot).toBeTruthy();
  expect(board.getBoard()[8].isShot).toBeTruthy();
});

test.only('All of the ships have been sunk', () => {
  const board = GameBoard();
  const carrier = Ship(5);
  const battleship = Ship(4);
  const cruiser = Ship(3);
  const submarine = Ship(3);
  const destroyer = Ship(2);

  board.placeShip(carrier, 0);
  board.placeShip(battleship, 7);
  board.placeShip(cruiser, 12);
  board.placeShip(submarine, 16);
  board.placeShip(destroyer, 21);

  function receiveAttackLoop(index, length) {
    for (let i = 0; i < length; i += 1) {
      board.receiveAttack(index + 1);
    }
  }

  receiveAttackLoop(0, 5);
  receiveAttackLoop(7, 4);
  receiveAttackLoop(12, 3);
  receiveAttackLoop(16, 3);
  receiveAttackLoop(21, 2);

  expect(board.allShipsAreSunk()).toBeTruthy();
});
