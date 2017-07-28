const expect = require('chai').expect;

// Test suite
describe('checkForShip', () => {
  const checkForShip = require('../game-logic/ship-methods').checkForShip;
  const player = {
    ships: [
      { locations: [[0,0]], },
    ],
  };
  // unit tests
  it('should check for no ship at a given player\'s coordinate.', () => {
    expect(checkForShip(player, [7,7])).to.be.false;
  });

});
