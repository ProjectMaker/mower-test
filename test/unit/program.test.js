const requireHelper = require('../require-helper');

const chai = require('chai');
const expect = require('chai').expect;

const MowersProgram = requireHelper('lib/mowers-program');

describe('# Unit tests MowersProgram', function() {
  const program = new MowersProgram();

  it('start is a function', function() {
    expect(program.start).to.be.a('function');
  });
  it('start with rules.txt return ["1 3 N", "5 1 E"]', function() {
    const result = program.start('./rules.txt');
    expect(program.start('./rules.txt')).to.deep.equal(['1 3 N', '5 1 E']);
  });
});