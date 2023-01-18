import GameBoard from './gameBoard';
import Player from './player';
import Ship from './shipFactory';

const Game = (() => {
  let winner = '';
  // Create players
  const player = Player('player');
  const computer = Player('computer');

  // Create player's boards
  const playerBoard = GameBoard();
  const computerBoard = GameBoard();

  // Create players ships
  const playerCarrier = Ship(5);
  const playerBattleship = Ship(4);
  const playerDestroyer = Ship(3);
  const playerSubmarine = Ship(3);
  const playerPatrolboat = Ship(2);
  const computerCarrier = Ship(5);
  const computerBattleship = Ship(4);
  const computerDestroyer = Ship(3);
  const computerSubmarine = Ship(3);
  const computerPatrolboat = Ship(2);

  const init = () => {
    playerBoard.placeShip(playerCarrier, 0);
    playerBoard.placeShip(playerBattleship, 6);
    playerBoard.placeShip(playerDestroyer, 12);
    playerBoard.placeShip(playerSubmarine, 16);
    playerBoard.placeShip(playerPatrolboat, 21);

    // computerBoard.randomPlaceShip(computerCarrier);
    // computerBoard.randomPlaceShip(computerBattleship);
    // computerBoard.randomPlaceShip(computerDestroyer);
    // computerBoard.randomPlaceShip(computerSubmarine);
    // computerBoard.randomPlaceShip(computerPatrolboat);
  };

  const reset = () => {
    playerBoard.resetBoard();
    computerBoard.resetBoard();
  };

  const turn = (next) => {
    if (next === player) {
      player.randomAttack(computerBoard);
      return;
    }

    computer.randomAttack(playerBoard);
  };

  const over = () => {
    if (playerBoard.allShipsAreSunk()) {
      winner = computer.getName();
      return true;
    }
    if (computerBoard.allShipsAreSunk()) {
      winner = player.getName();
      return true;
    }
  };

  const getWinner = () => winner;

  return { init, getWinner, playerBoard, computerBoard, reset };
})();

export default Game;
