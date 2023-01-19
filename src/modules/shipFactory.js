const Ship = (length) => {
  let numOfHits = 0;

  const getLength = () => length;

  const getNumOfHits = () => numOfHits;

  const hit = () => {
    numOfHits += 1;
  };

  const isSunk = () => numOfHits === length;

  return { hit, isSunk, getNumOfHits, getLength };
};

export default Ship;
