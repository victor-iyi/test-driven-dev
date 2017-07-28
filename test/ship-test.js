const expect = require('chai').expect;

describe('Game logic\'s [checkForShip]', () => {
  const checkForShip = require('../game-logic/ship-methods').checkForShip;

  it('should correctly report no ship at a given player\'s coordinate ', () => {
    const player = {
      ships: [
        {
          locations: [[0, 0]]
        },
      ],
    };
    expect(checkForShip(player, [0, 0])).to.be.false;
  });

});
