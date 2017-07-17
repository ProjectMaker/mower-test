const requireHelper = require('../require-helper');

const chai = require('chai');
const expect = require('chai').expect;

const Grass = requireHelper('lib/grass');

describe('# Unit tests Grass 5 5', function() {
  const grass = new Grass(5,5);

  it('isInside is a function', function() {
    expect(grass.isInside).to.be.a('function');
  });
  it('isInside(3,4) === true', function() {
    expect(grass.isInside(3,4)).to.be.equal(true);
  });
  it('isInside(5,5) === false', function() {
    expect(grass.isInside(5,5)).to.be.equal(false);
  });
});