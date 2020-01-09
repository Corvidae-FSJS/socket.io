const fs = require('fs').promises;

const writeFile = (path, data) => fs.writeFile(path, data, 'utf8');

module.exports = writeFile;