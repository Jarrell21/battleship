const Player = (name) => {
  const getName = () => name;
  const shotCoordinates = [];

  const attack = (gameBoard, index) => {
    if (isAlreadyShot(index)) return;

    gameBoard.receiveAttack(index);
    shotCoordinates.push(index);
  };

  const randomAttack = (gameBoard) => {
    if (shotCoordinates.length === 100) return;

    let coordinate = Math.floor(Math.random() * 10);

    while (isAlreadyShot(coordinate)) {
      coordinate = Math.floor(Math.random() * 10);
    }

    shotCoordinates.push(coordinate);
    gameBoard.receiveAttack(coordinate);
  };

  const isAlreadyShot = (index) => shotCoordinates.includes(index);

  return { attack, randomAttack, getName };
};

export default Player;
