module.exports.checkForShip = (player, coordinates) => {
  let shipPresent, ship;
  for ( let i=0; i < player.ships.length; i++ ) {
    ship = player.ships[i];
    shipPresent = ship.locations.filter(function(actualCoordinates) {
      return (coordinates[0] === actualCoordinates[0]) && (coordinates[1] === actualCoordinates[1]);
    })[0];
    if (!shipPresent) return false;
    else return true;
  }
}
