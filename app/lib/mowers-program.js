const fs = require('fs');

const Grass = require('./grass');
const Mower = require('./mower');

/**
 * MowersProgram play the mower's rules
 */
const MowersProgram = class {
  /**
   * start the program
   * @param path
   * @returns {Array}
   */
  start(path) {
    const result = [];
    const datas = this._parseFile(path);
    const grass = new Grass(datas.grass.x + 1, datas.grass.y + 1);
    datas.mowers.forEach((mowerDatas) => {
      const mower = new Mower(mowerDatas.x, mowerDatas.y, mowerDatas.orientation);
      result.push(mower.play(grass, mowerDatas.movements));
    });

    return result;
  }

  /**
   * parse the input file
   * @param path
   * @returns {{grass: {x: Number, y: Number}, mowers: Array}}
   * @private
   */
  _parseFile(path) {
    const rules = fs.readFileSync(path, 'UTF8').split(/\n/);
    if (!rules[rules.length - 1]) rules.pop();

    const grassCoordinates = rules.shift().split(' ');
    if (grassCoordinates.length !== 2) throw new Error('Bad coordinates grass');
    if (rules.length  % 2 !== 0) throw new Error('Bad mower rules format');
    const mowers = [];
    for (let idx=0; idx<rules.length; idx=idx+2) {
      const mowerCoordinates = rules[idx].split(' ');
      if (mowerCoordinates.length !== 3) throw new Error('Bad coordinates mower');
      mowers.push({
        x: parseInt(mowerCoordinates[0]),
        y: parseInt(mowerCoordinates[1]),
        orientation: mowerCoordinates[2].toUpperCase(),
        movements: Array.from(rules[idx+1].toUpperCase())
      });
    }

    return {
      grass: { x: parseInt(grassCoordinates[0]), y: parseInt(grassCoordinates[1]) },
      mowers
    };
  }
};

module.exports = MowersProgram;