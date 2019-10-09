const fs = require('fs').promises;

const readFile = path => fs.readFile(path, 'utf8');
const writeFile = path => fs.writeFile(path, 'utf8');

module.exports = readFile, writeFile;