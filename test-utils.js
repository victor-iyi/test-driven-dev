const expect = require('chai').expect;

expect(true).to.be.true;

const movieTitle = 'a movie title theme goes here.';
const titleResult = 'A movie Title Theme Goes Here.';

function titleCase(title) {
  return title[0].toUpperCase() + title.substring(1);
}

// expectations
expect(titleCase(movieTitle)).to.be.a('string');
expect(titleCase('a')).to.equal('A');
expect(titleCase('vertigo')).to.equal('Vertigo');
