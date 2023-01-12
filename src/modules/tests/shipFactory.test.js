import Ship from '../shipFactory';

test('number of hits should be 1', () => {
  const carrier = Ship(5);
  carrier.hit();
  expect(carrier.getNumOfHits()).toBe(1);
});

test('number of hits should be 2', () => {
  const carrier = Ship(5);
  carrier.hit();
  carrier.hit();
  expect(carrier.getNumOfHits()).toBe(2);
});

test('Ship should sunk when numOfHits is equal to length', () => {
  const carrier = Ship(5);
  carrier.hit();
  carrier.hit();
  carrier.hit();
  carrier.hit();
  carrier.hit();
  expect(carrier.isSunk()).toBeTruthy();
});
