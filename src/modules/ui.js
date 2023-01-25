import '../assets/style.css';
import Game from './game';
import GameBoard from './gameBoard';

const UI = (() => {
  const loadPage = () => {
    loadPlaceShipScreen();
    // loadMainGameScreen();
  };

  const createGameBoard = (player) => {
    const boardElement = document.querySelector(`.${player}-board`);
    const gameBoardArr = Game.getGameBoard(`${player}`).getBoard();

    for (let i = 0; i < gameBoardArr.length; i += 1) {
      if (player === 'player') {
        boardElement.innerHTML += `<div class="${player}-board-square" data-index="${i}" data-hasShip="${gameBoardArr[i].hasShip}" data-isShot="${gameBoardArr[i].isShot}"></div>`;
      } else {
        boardElement.innerHTML += `<div class="${player}-board-square" data-index="${i}"  data-isShot="${gameBoardArr[i].isShot}"></div>`;
      }
    }
  };

  const loadFleet = (player) => {
    const boardSquares = document.querySelectorAll(`.${player}-board-square`);
    const gameBoard = Game.getGameBoard(`${player}`).getBoard();

    for (let i = 0; i < gameBoard.length; i += 1) {
      if (gameBoard[i].hasShip) {
        boardSquares[i].classList.add('placed');
      }
    }
  };

  // The following functions are for the placing ship screen
  const ships = Game.getPlayerShips();
  let currentShip = ships[0];
  let isVertical = false;

  const loadPlaceShipScreen = () => {
    const main = document.querySelector('.main');

    main.innerHTML += `
    <section class="placing-ship">
      <span class="place-ship-instruction">Place your ${currentShip.getName()}!</span>
      <div class="player-board gameboard"></div>
      <div class="place-ship-buttons">
        <button class="rotate-btn">Rotate</button>
        <button class="random-btn">Place randomly</button>
        <button class="reset-btn">Reset</button>
      </div>
    </section>`;

    createGameBoard('player');
    loadFleet('player');
    placeShipInitEvents();
  };

  // Adding event listeners
  const placeShipInitEvents = () => {
    const playerBoardSquares = document.querySelectorAll(
      '.player-board-square'
    );
    const rotateBtn = document.querySelector('.rotate-btn');
    const randomBtn = document.querySelector('.random-btn');
    const resetPlaceShipBtn = document.querySelector('.reset-btn');

    playerBoardSquares.forEach((square) => {
      square.addEventListener('mouseover', addShipPreview);
      square.addEventListener('mouseout', removeShipPreview);
      square.addEventListener('click', placeShip);

      square.classList.add('placing');
    });

    rotateBtn.addEventListener('click', rotateShip);
    resetPlaceShipBtn.addEventListener('click', resetPlaceShip);
    randomBtn.addEventListener('click', placeShipsRandomly);
  };

  // Function when mouse is over the board
  const addShipPreview = (e) => {
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
        targetArr[i].classList.add('ship-preview');
      }
    } else {
      e.target.classList.add('not-allowed');
    }
  };

  // Function when mouse is out from the board
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
          targetArr[i].classList.remove('ship-preview');
        }
      }
    } else {
      e.target.classList.remove('not-allowed');
    }
  };

  // Returns an array that contains the coordinates
  // for the specific ship and it's orientation
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

  // Function for placing ships
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
        targetArr[i].classList.remove('placing');
        targetArr[i].classList.remove('ship-preview');
        targetArr[i].classList.add('placed');
      }

      if (currentShip !== ships[4]) {
        changeShip();
        return;
      }

      donePlacingShips();
    }
  };

  const placeShipsRandomly = () => {
    const playerBoard = Game.getGameBoard('player');

    playerBoard.resetBoard();
    playerBoard.randomPlaceShips();
    updateBoard(playerBoard);
  };

  const updateBoard = (board) => {
    const thisBoard = board.getBoard();
    const playerBoardSquares = document.querySelectorAll(
      '.player-board-square'
    );

    for (let i = 0; i < thisBoard.length; i += 1) {
      playerBoardSquares[i].classList.remove('placed');
      playerBoardSquares[i].setAttribute('data-hasShip', 'false');

      if (thisBoard[i].hasShip === true) {
        playerBoardSquares[i].setAttribute('data-hasShip', 'true');
        playerBoardSquares[i].classList.add('placed');
      }
    }

    donePlacingShips();
  };

  // Function for changing ship after the previous ship was placed
  const changeShip = () => {
    const placeShipInstruction = document.querySelector(
      '.place-ship-instruction'
    );
    const shipNames = [];

    ships.forEach((ship) => {
      shipNames.push(ship.getName());
    });

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
    const main = document.querySelector('.main');

    main.innerHTML = '';
    playerBoard.resetBoard();
    loadPlaceShipScreen();
    currentShip = ships[0];
  };

  const donePlacingShips = () => {
    const playerBoardSquares = document.querySelectorAll(
      '.player-board-square'
    );
    const placeShipInstruction = document.querySelector(
      '.place-ship-instruction'
    );

    placeShipInstruction.innerHTML = `<button class="start-btn">Start Game</button>`;

    playerBoardSquares.forEach((square) => {
      square.removeEventListener('mouseover', addShipPreview);
      square.removeEventListener('mouseout', removeShipPreview);
      square.removeEventListener('click', placeShip);
      square.classList.remove('placing');
    });

    const startBtn = document.querySelector('.start-btn');

    startBtn.addEventListener('click', loadMainGameScreen);
  };

  // The following functions are for the main game screen
  const loadMainGameScreen = () => {
    const main = document.querySelector('.main');

    main.innerHTML = `
    <section class="gameboards-container">
      <div>
        <div class="player-board gameboard"></div>
        <span>Your game board</span>
      </div>
      <div>
        <div class="computer-board gameboard"></div>
        <span>Computer game board</span>
      </div>
    </section>`;

    Game.init();
    createGameBoard('player');
    createGameBoard('computer');
    loadFleet('player');
    loadFleet('computer');
    initGameEvents();
  };

  const initGameEvents = () => {
    const computerBoardSquares = document.querySelectorAll(
      '.computer-board-square'
    );

    computerBoardSquares.forEach((square) => {
      square.addEventListener('click', playerAttack);
      square.classList.add('shooting-allowed');
    });
  };

  const playerAttack = (e) => {
    const targetElement = e.target;
    const index = parseInt(targetElement.getAttribute('data-index'));
    const player = Game.getPlayer('player');
    const computerBoardObj = Game.getGameBoard('computer');
    const computerBoardArr = computerBoardObj.getBoard();

    if (!player.attack(computerBoardObj, index)) return;

    for (let i = 0; i < computerBoardArr.length; i += 1) {
      if (i === index && computerBoardArr[i].hasShip) {
        targetElement.classList.add('ship-is-shot');
      }
    }

    targetElement.textContent = 'X';
    targetElement.setAttribute('data-isShot', 'true');
    targetElement.classList.remove('shooting-allowed');
    targetElement.classList.add('not-allowed');

    if (!Game.over()) {
      setTimeout(computerAttack, 1000);
      return;
    }

    setTimeout(() => {
      alert(`${Game.getWinner()} WON`);
    }, 1000);
  };

  const computerAttack = () => {
    const playerBoardSquares = document.querySelectorAll(
      '.player-board-square'
    );
    const playerBoard = Game.getGameBoard('player').getBoard();

    Game.computerTurn();

    for (let i = 0; i < playerBoard.length; i += 1) {
      const { hasShip } = playerBoard[i];
      const { isShot } = playerBoard[i];
      if (isShot) {
        playerBoardSquares[i].textContent = 'X';
        if (hasShip) {
          playerBoardSquares[i].style.backgroundColor = 'red';
        }
      }
    }

    if (Game.over()) {
      setTimeout(() => {
        alert(`${Game.getWinner()} WON`);
      }, 1000);
    }
  };

  const restartGame = () => {};

  return { loadPage };
})();

export default UI;
