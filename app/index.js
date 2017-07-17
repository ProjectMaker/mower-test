const MowersProgram = require('./lib/mowers-program');

const program = new MowersProgram();
const coordinates = program.start(process.env.npm_config_path);
console.log(coordinates);
