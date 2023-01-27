const Player = (name) => {
  const getName = () => name;
  let shotCoordinates = [];
  let firstShotHit = null;
  let lastShot = null;
  let lastShotDirection = null;

  const attack = (gameBoard, index) => {
    if (isAlreadyShot(index)) return false;

    gameBoard.receiveAttack(index);
    shotCoordinates.push(index);
    return true;
  };

  const randomAttack = (gameBoard) => {
    if (shotCoordinates.length === 100) return;

    const coordinate = computerPlay(gameBoard);

    shotCoordinates.push(coordinate);
    gameBoard.receiveAttack(coordinate);
  };

  const isAlreadyShot = (index) => shotCoordinates.includes(index);

  // Algorithm for making the computer attacks a little smarter
  const computerPlay = (gameBoard) => {
    let coordinate = Math.floor(Math.random() * 100);

    while (isAlreadyShot(coordinate)) {
      coordinate = Math.floor(Math.random() * 100);
    }

    if (firstShotHit !== null && lastShot === null) {
      if (lastShotDirection === 'up') {
        if (
          isAttackLogical(firstShotHit, 'down') &&
          !isAlreadyShot(firstShotHit + 10)
        ) {
          lastShotDirection = 'down';
          coordinate = firstShotHit + 10;
        } else {
          firstShotHit = null;
          lastShotDirection = '';
        }
      } else if (lastShotDirection === 'down') {
        if (
          isAttackLogical(firstShotHit, 'up') &&
          !isAlreadyShot(firstShotHit - 10)
        ) {
          lastShotDirection = 'up';
          coordinate = firstShotHit - 10;
        } else {
          firstShotHit = null;
          lastShotDirection = '';
        }
      } else if (
        isAttackLogical(firstShotHit, 'right') &&
        !isAlreadyShot(firstShotHit + 1)
      ) {
        lastShotDirection = 'right';
        coordinate = firstShotHit + 1;
      } else if (
        isAttackLogical(firstShotHit, 'left') &&
        !isAlreadyShot(firstShotHit - 1)
      ) {
        lastShotDirection = 'left';
        coordinate = firstShotHit - 1;
      } else if (
        isAttackLogical(firstShotHit, 'up') &&
        !isAlreadyShot(firstShotHit - 10)
      ) {
        lastShotDirection = 'up';
        coordinate = firstShotHit - 10;
      } else if (
        isAttackLogical(firstShotHit, 'down') &&
        !isAlreadyShot(firstShotHit + 10)
      ) {
        lastShotDirection = 'down';
        coordinate = firstShotHit + 10;
      } else {
        firstShotHit = null;
        lastShotDirection = '';
      }
    } else if (lastShot !== null) {
      if (lastShotDirection === 'up') {
        if (isAttackLogical(lastShot, 'up') && !isAlreadyShot(lastShot - 10)) {
          lastShotDirection = 'up';
          coordinate = lastShot - 10;
        } else if (
          isAttackLogical(firstShotHit, 'down') &&
          !isAlreadyShot(firstShotHit + 10)
        ) {
          lastShotDirection = 'down';
          coordinate = firstShotHit + 10;
        }
      } else if (lastShotDirection === 'down') {
        if (
          isAttackLogical(lastShot, 'down') &&
          !isAlreadyShot(lastShot + 10)
        ) {
          coordinate = lastShot + 10;
        }
      } else if (
        isAttackLogical(lastShot, 'right') &&
        !isAlreadyShot(lastShot + 1)
      ) {
        lastShotDirection = 'right';
        coordinate = lastShot + 1;
      } else if (
        isAttackLogical(lastShot, 'left') &&
        !isAlreadyShot(lastShot - 1)
      ) {
        lastShotDirection = 'left';
        coordinate = lastShot - 1;
      } else if (
        isAttackLogical(firstShotHit, 'left') &&
        !isAlreadyShot(firstShotHit - 1)
      ) {
        lastShotDirection = 'left';
        coordinate = firstShotHit - 1;
      } else if (
        isAttackLogical(lastShot, 'up') &&
        !isAlreadyShot(lastShot - 10)
      ) {
        lastShotDirection = 'up';
        coordinate = lastShot - 10;
      } else if (
        isAttackLogical(lastShot, 'down') &&
        !isAlreadyShot(lastShot + 10)
      ) {
        lastShotDirection = 'down';
        coordinate = lastShot + 10;
      }
    }

    if (itsAHit(gameBoard, coordinate) && firstShotHit === null) {
      firstShotHit = coordinate;
    }

    if (itsAHit(gameBoard, coordinate)) {
      lastShot = coordinate;
    } else {
      lastShot = null;
    }

    return coordinate;
  };

  const itsAHit = (gameBoard, index) => {
    const boardArr = gameBoard.getBoard();

    if (boardArr[index].hasShip) {
      return true;
    }

    return false;
  };

  const isAttackLogical = (i, directionOfAttack) => {
    for (let j = 0; j < 10; j += 1) {
      if (i === j * 10 - 1 && directionOfAttack === 'right') {
        return false;
      }
      if (i === j * 10 && directionOfAttack === 'left') {
        return false;
      }
      if (i === j && directionOfAttack === 'up') {
        return false;
      }
      if (i > 90 && directionOfAttack === 'down') {
        return false;
      }
    }
    return true;
  };

  const reset = () => {
    shotCoordinates = [];
    firstShotHit = null;
    lastShot = null;
    lastShotDirection = null;
  };

  return { attack, randomAttack, getName, reset };
};

export default Player;
