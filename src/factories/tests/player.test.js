import GameBoard from '../gameBoard';
import Player from '../player';

test('Players can attack the enemy board', () => {
  const enemyBoard = GameBoard();
  const player1 = Player();

  player1.attack(enemyBoard, 21);

  expect(enemyBoard.getBoard()[21].isShot).toBeTruthy();
});

test('Computer can attack the player board', () => {
  const playerBoard = GameBoard();
  const computer = Player();

  computer.randomAttack(playerBoard);

  expect(playerBoard.getBoard()).toContainEqual({
    ship: null,
    hasShip: false,
    isShot: true,
  });
});
