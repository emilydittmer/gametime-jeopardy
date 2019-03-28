import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);

describe('See if the tests are running', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });
});
