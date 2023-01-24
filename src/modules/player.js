const Player = (name) => {
  const getName = () => name;
  const shotCoordinates = [];

  const attack = (gameBoard, index) => {
    if (isAlreadyShot(index)) return false;

    gameBoard.receiveAttack(index);
    shotCoordinates.push(index);
    return true;
  };

  const randomAttack = (gameBoard) => {
    if (shotCoordinates.length === 100) return;

    let coordinate = Math.floor(Math.random() * 100);

    while (isAlreadyShot(coordinate)) {
      coordinate = Math.floor(Math.random() * 100);
    }

    shotCoordinates.push(coordinate);
    gameBoard.receiveAttack(coordinate);
  };

  const isAlreadyShot = (index) => shotCoordinates.includes(index);

  return { attack, randomAttack, getName };
};

export default Player;
