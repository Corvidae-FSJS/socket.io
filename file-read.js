const fs = require('fs').promises;

const readFile = path => fs.readFile(path, 'utf8');

module.exports = readFile;