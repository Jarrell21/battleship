import '../assets/style.css';
import Game from './game';
import GameBoard from './gameBoard';

const UI = (() => {
  const loadPage = () => {
    Game.init();
    loadPlaceShipScreen();
  };

  const createGameBoard = (player) => {
    const board = document.querySelector(`.${player}-board`);
    let array = [];

    if (player === 'player') array = Game.getGameBoard('player').getBoard();
    else {
      array = Game.getGameBoard('computer').getBoard();
    }

    for (let i = 0; i < array.length; i += 1) {
      board.innerHTML += `<div class="${player}-board-square" data-index="${i}" data-hasShip="${array[i].hasShip}">${i}</div>`;
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
    const computerBoard = document.querySelector(`.computer-board`);
    computerBoard.innerHTML = '';
    Game.reset();
    createGameBoard('computer');
    loadFleet('computer');
  };

  // Functions for place ship screen
  const loadPlaceShipScreen = () => {
    const main = document.querySelector('main');

    main.innerHTML += `
    <section class="gameboards-container">
      <div>
        <span>Place your Ships!</span>
        <button class="rotate-btn">Rotate</button>
        <div class="player-board gameboard"></div>
      </div>
    </section>`;

    createGameBoard('player');
    placeShipInitEvents();
  };

  // Adding event listeners
  const placeShipInitEvents = () => {
    const boardSquares = document.querySelectorAll('.player-board-square');
    const rotateBtn = document.querySelector('.rotate-btn');

    boardSquares.forEach((square) => {
      square.addEventListener('mouseover', showShipPreview);
      square.addEventListener('mouseout', hideShipPreview);
      square.addEventListener('click', placeShip);
    });
  };

  const showShipPreview = (e) => {
    const board = Game.getGameBoard('player');
    const ships = Game.getPlayerShips();
    const carrier = ships[0];
    const index = parseInt(e.target.getAttribute('data-index'));
    e.target.style.cursor = 'pointer';

    if (board.isPlacementPossible(carrier, index, false)) {
      const targetArr = [
        e.target,
        e.target.nextSibling,
        e.target.nextSibling.nextSibling,
        e.target.nextSibling.nextSibling.nextSibling,
        e.target.nextSibling.nextSibling.nextSibling.nextSibling,
      ];

      for (let i = 0; i < carrier.getLength(); i += 1) {
        targetArr[i].style.backgroundColor = 'red';
      }
    } else {
      e.target.style.cursor = 'no-drop';
    }
  };

  const hideShipPreview = (e) => {
    const board = Game.getGameBoard('player');
    const ships = Game.getPlayerShips();
    const carrier = ships[0];
    const index = parseInt(e.target.getAttribute('data-index'));
    e.target.style.cursor = 'pointer';

    if (board.isPlacementPossible(carrier, index, false)) {
      const targetArr = [
        e.target,
        e.target.nextSibling,
        e.target.nextSibling.nextSibling,
        e.target.nextSibling.nextSibling.nextSibling,
        e.target.nextSibling.nextSibling.nextSibling.nextSibling,
      ];

      targetArr.forEach((target) => {
        target.style.backgroundColor = '';
      });
    }
  };

  const placeShip = (e, ship) => {
    // const board = Game.getGameBoard('player');
    // const ships = Game.getPlayerShips();
    // const carrier = ships[0];
    // const index = parseInt(e.target.getAttribute('data-index'));
  };

  return { loadPage };
})();

export default UI;
