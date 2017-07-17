const requireHelper = require('../require-helper');

const chai = require('chai');
const expect = require('chai').expect;

const Grass = requireHelper('lib/grass');
const Mower = requireHelper('lib/mower');

describe('# Unit tests Mover 1 2 N on Grass 5 5', function() {
  const grass = new Grass(5,5);
  const mower = new Mower(1, 2, 'N');
  it('rotate is a function', function() {
    expect(mower.rotate).to.be.a('function');
  });
  it('rotate(L) === 1 2 W', function() {
    mower.rotate('L');
    expect(mower.toString()).to.be.equal('1 2 W');
  });
  it('rotate(R) === 1 2 N', function() {
    mower.rotate('R');
    expect(mower.toString()).to.be.equal('1 2 N');
  });

  it('move() === 1 3 N', function() {
    mower.move(grass);
    expect(mower.toString()).to.be.equal('1 3 N');
  });
});