const ORIENTATIONS = ['N','E','S','W'];
const DIRECTIONS = ['L','R'];

/**
 * Mower move on the grass
 */
const Mower = class {
  /**
   * class constructor
   * @param col {number}
   * @param row {number}
   * @param orientation {string}
   */
  constructor(col, row, orientation) {
    if (isNaN(col) || isNaN(row)) throw new Error('Mower coordinates must be numbers');
    if (ORIENTATIONS.indexOf(orientation) === -1) throw new Error(`Mower orientation must be in ${ORIENTATIONS.join(',')}`);

    this.col = col;
    this.row = row;
    this.orientation = orientation;
  }

  /**
   * change direction depending on direction
   * @param direction {string}
   */
  rotate(direction) {
    if (DIRECTIONS.indexOf(direction) === -1) throw new Error('Mower direction must be in L,R');
    let idx = ORIENTATIONS.indexOf(this.orientation);
    if (direction === 'L') idx--;
    else idx++;

    if (idx < 0) this.orientation = ORIENTATIONS[ORIENTATIONS.length - 1];
    else if (idx >= ORIENTATIONS.length) this.orientation = ORIENTATIONS[0];
    else this.orientation = ORIENTATIONS[idx];
  }

  /**
   * move mower if the coordinate is inside grass
   * @param grass {Grass}
   */
  move(grass) {
    let col = this.col;
    let row = this.row;
    if (this.orientation === 'N') row++;
    else if (this.orientation === 'S') row--;
    else if (this.orientation === 'E') col++;
    else col--;

    if (grass.isInside(col, row)) {
      this.col = col;
      this.row = row;
    }
  }

  /**
   * play all movements on the grass
   * @param grass {Grass}
   * @param movements {Array}
   * @returns {*}
   */
  play(grass, movements) {
    movements.forEach((movement) => {
      if (movement !== 'F') this.rotate(movement);
      else this.move(grass);
    });
    return this.toString();
  }

  /**
   * return current coordinates
   * @returns {string}
   */
  toString() {
    return `${this.col} ${this.row} ${this.orientation}`;
  }
};

module.exports = Mower;