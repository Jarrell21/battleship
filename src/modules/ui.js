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

  // The following functions are for the placing ship screen
  const ships = Game.getPlayerShips();
  let currentShip = ships[0];
  let isVertical = false;

  const loadPlaceShipScreen = () => {
    const main = document.querySelector('main');

    main.innerHTML += `
    <section class="gameboards-container">
      <div>
        <span class="place-ship-instruction">Place your Carrier!</span>
        <button class="rotate-btn">Rotate</button>
        <button class="reset-place-ship-btn">Reset</button>
        <div class="player-board gameboard"></div>
      </div>
    </section>`;

    createGameBoard('player');
    loadFleet('player');
    placeShipInitEvents();
  };

  // Adding event listeners
  const placeShipInitEvents = () => {
    const boardSquares = document.querySelectorAll('.player-board-square');
    const rotateBtn = document.querySelector('.rotate-btn');
    const resetPlaceShipBtn = document.querySelector('.reset-place-ship-btn');

    boardSquares.forEach((square) => {
      square.addEventListener('mouseover', (e) => {
        addShipPreview(e, currentShip, isVertical);
      });
      square.addEventListener('mouseout', (e) => {
        removeShipPreview(e, currentShip, isVertical);
      });
      square.addEventListener('click', placeShip);
    });

    rotateBtn.addEventListener('click', rotateShip);

    resetPlaceShipBtn.addEventListener('click', resetPlaceShip);
  };

  const addShipPreview = (e) => {
    const boardSquares = document.querySelectorAll('.player-board-square');
    const playerBoard = Game.getGameBoard('player');
    const index = parseInt(e.target.getAttribute('data-index'));

    boardSquares.forEach((square) => {
      square.classList.add('placing');
    });

    if (playerBoard.isPlacementPossible(currentShip, index, isVertical)) {
      let targetArr = [];

      if (isVertical) {
        targetArr = populateTargetShipCoord(e, 'vertical');
      } else {
        targetArr = populateTargetShipCoord(e, 'horizontal');
      }

      for (let i = 0; i < currentShip.getLength(); i += 1) {
        targetArr[i].setAttribute('id', 'ship-preview');
      }
    } else {
      e.target.classList.add('not-allowed');
    }
  };

  const removeShipPreview = (e) => {
    const playerBoard = Game.getGameBoard('player');
    const index = parseInt(e.target.getAttribute('data-index'));

    if (playerBoard.isPlacementPossible(currentShip, index, isVertical)) {
      let targetArr = [];

      if (isVertical) {
        targetArr = populateTargetShipCoord(e, 'vertical');
      } else {
        targetArr = populateTargetShipCoord(e, 'horizontal');
      }

      for (let i = 0; i < currentShip.getLength(); i += 1) {
        if (targetArr[i].getAttribute('data-hasShip') === 'false') {
          targetArr[i].removeAttribute('id');
        }
      }
    } else {
      e.target.classList.remove('not-allowed');
    }
  };

  const populateTargetShipCoord = (e, orientation) => {
    const targetArr = [];
    if (orientation === 'vertical') {
      let current = e.target;
      let next = current.nextSibling;

      targetArr.push(current);

      for (let i = 0; i < 9; i += 1) {
        if (next) {
          current = next;
          next = current.nextSibling;
        }
      }
      current = e.target;

      for (let i = 0; i < currentShip.getLength(); i += 1) {
        if (next) {
          targetArr.push(next);
          current = next;
          next = current.nextSibling;

          for (let j = 0; j < 9; j += 1) {
            if (next) {
              current = next;
              next = current.nextSibling;
            }
          }
        }
      }
    } else {
      let current = e.target;
      let next = current.nextSibling;

      targetArr.push(current);

      for (let i = 0; i < currentShip.getLength(); i += 1) {
        if (next) {
          targetArr.push(next);
          current = next;
          next = current.nextSibling;
        }
      }
    }

    return targetArr;
  };

  const placeShip = (e) => {
    const playerBoard = Game.getGameBoard('player');
    const index = parseInt(e.target.getAttribute('data-index'));

    if (playerBoard.isPlacementPossible(currentShip, index, isVertical)) {
      let targetArr = [];

      if (isVertical) {
        targetArr = populateTargetShipCoord(e, 'vertical');
      } else {
        targetArr = populateTargetShipCoord(e, 'horizontal');
      }

      playerBoard.placeShip(currentShip, index, isVertical);

      for (let i = 0; i < currentShip.getLength(); i += 1) {
        targetArr[i].setAttribute('data-hasShip', 'true');
      }

      if (currentShip !== ships[4]) {
        changeShip();
        return;
      }

      console.log('Change to main screen');
      const boardSquares = document.querySelectorAll('.player-board-square');

      boardSquares.forEach((square) => {
        square.removeEventListener('mouseover', addShipPreview);
        square.removeEventListener('mouseout', removeShipPreview);
        square.removeEventListener('click', placeShip);
      });
    }
  };

  const changeShip = () => {
    const placeShipInstruction = document.querySelector(
      '.place-ship-instruction'
    );
    const shipNames = [
      'Carrier',
      'BattleShip',
      'Destroyer',
      'Submarine',
      'Patrol Boat',
    ];

    for (let i = 0; i < ships.length; i += 1) {
      if (currentShip === ships[i]) {
        currentShip = ships[i + 1];
        placeShipInstruction.innerHTML = `Place your ${shipNames[i + 1]}`;
        return;
      }
    }
  };

  const rotateShip = () => {
    if (isVertical === false) {
      isVertical = true;
    } else {
      isVertical = false;
    }
  };

  const resetPlaceShip = () => {
    const playerBoard = Game.getGameBoard('player');
    const main = document.querySelector('main');

    main.innerHTML = '';
    playerBoard.resetBoard();
    loadPlaceShipScreen();
    currentShip = ships[0];
  };

  return { loadPage };
})();

export default UI;
