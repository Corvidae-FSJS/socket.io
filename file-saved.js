const fs = require('fs').promises;

const savedFile = (path, data) => fs.savedFile(path, data, 'utf8');

module.exports = savedFile;