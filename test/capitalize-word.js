const expect = require('chai').expect;

const movieTitle = 'Some Sample Movie Title Goes Here.';
const testTitle = 'some sample movie title goes here.';

function titleCase(title) {
  return title.split(' ').map(word => {
    return word[0].toUpperCase() + word.substring(1);
  }).join(' ');
}

// expectations...
expect(titleCase(testTitle)).to.be.a('string');
expect(titleCase(testTitle[0])).to.equal(movieTitle[0]);
expect(titleCase(testTitle)).to.be.equal(movieTitle); // final expectation.
