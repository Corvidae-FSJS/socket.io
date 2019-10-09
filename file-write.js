const fs = require('fs').promises;

const writeFile = path => fs.writeFile(path, 'utf8');

module.exports = writeFile;