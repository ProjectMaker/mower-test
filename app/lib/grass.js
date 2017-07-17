const _ = require('underscore');

/**
 * Grass is the surface to be mowed
 */
const Grass = class {
  /**
   * class constructor
   * @param nbCols {number}
   * @param nbRows {number}
   */
  constructor(nbCols, nbRows) {
    if (_.isNaN(nbCols) || _.isNaN(nbRows)) throw new Error('Grass coordinates must be numbers')

    this.nbCols = nbCols;
    this.nbRows = nbRows;
  }

  /**
   * checks if the coordinates are in the surface
   * @param col {number}
   * @param row {number}
   * @returns {boolean}
   */
  isInside(col, row) {
    return col >= 0 && col < this.nbCols && row >= 0 && row < this.nbRows;
  }
};

module.exports = Grass;

