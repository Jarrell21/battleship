import '../assets/style.css';
import Game from './game';

const UI = (() => {
  const loadPage = () => {
    Game.init();
    createGameBoard('player');
    createGameBoard('computer');
    loadFleet('player');
    loadFleet('computer');
    initButtons();
  };

  const createGameBoard = (player) => {
    const board = document.querySelector(`.${player}-board`);
    let array = [];

    if (player === 'player') array = Game.playerBoard.getBoard();
    else {
      array = Game.computerBoard.getBoard();
    }

    for (let i = 0; i < array.length; i += 1) {
      board.innerHTML += `<div class="board-square" data-index="${i}" data-hasShip="${array[i].hasShip}"></div>`;
    }
  };

  const loadFleet = (player) => {
    const board = document.querySelector(`.${player}-board`);

    [...board.children].forEach((child) => {
      if (child.getAttribute('data-hasShip') === 'true') {
        if (player === 'player') {
          child.style.backgroundColor = 'blue';
        } else {
          child.style.backgroundColor = 'blue';
        }
      } else {
        child.style.backgroundColor = 'yellow';
      }
    });
  };

  const initButtons = () => {
    const resetBtn = document.querySelector('.reset-btn');

    resetBtn.addEventListener('click', resetGame);
  };

  const resetGame = () => {
    Game.reset();
    loadFleet('player');
    loadFleet('computer');
  };

  return { loadPage };
})();

export default UI;
