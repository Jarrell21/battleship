const Ship = (length, name) => {
  let numOfHits = 0;

  const getLength = () => length;

  const getName = () => name;

  const getNumOfHits = () => numOfHits;

  const hit = () => {
    numOfHits += 1;
  };

  const isSunk = () => numOfHits === length;

  return { hit, isSunk, getNumOfHits, getLength, getName };
};

export default Ship;
