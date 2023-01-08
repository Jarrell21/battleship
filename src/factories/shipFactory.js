const Ship = (length) => {
  let numOfHits = 0;

  const getNumOfHits = () => numOfHits;

  const hit = () => {
    numOfHits += 1;
  };

  const isSunk = () => {
    if (numOfHits >= length) return true;
    return false;
  };

  return { hit, isSunk, getNumOfHits };
};

export default Ship;
