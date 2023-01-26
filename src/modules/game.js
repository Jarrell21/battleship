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
  const playerCarrier = Ship(5, 'Carrier');
  const playerBattleship = Ship(4, 'Battleship');
  const playerDestroyer = Ship(3, 'Destroyer');
  const playerSubmarine = Ship(3, 'Submarine');
  const playerPatrolboat = Ship(2, 'Patrolboat');

  const getPlayer = (playerName) =>
    playerName === 'player' ? player : computer;

  const getGameBoard = (playerName) => {
    if (playerName === 'player') return playerBoard;
    return computerBoard;
  };

  const getPlayerShips = () => [
    playerCarrier,
    playerBattleship,
    playerDestroyer,
    playerSubmarine,
    playerPatrolboat,
  ];

  const init = () => {
    computerBoard.randomPlaceShips();
  };

  const restart = () => {
    player.reset();
    playerBoard.resetBoard();
    computer.reset();
    computerBoard.resetBoard();
  };

  const computerTurn = () => {
    computer.randomAttack(playerBoard);
  };

  const over = () => {
    if (playerBoard.allShipsHaveSunk()) {
      winner = computer.getName();
      return true;
    }
    if (computerBoard.allShipsHaveSunk()) {
      winner = player.getName();
      return true;
    }
  };

  const getWinner = () => winner;

  return {
    init,
    getPlayer,
    getWinner,
    getGameBoard,
    getPlayerShips,
    restart,
    computerTurn,
    over,
  };
})();

export default Game;
