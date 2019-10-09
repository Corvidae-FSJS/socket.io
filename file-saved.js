const fs = require('fs').promises;

const savedFile = path => fs.savedFile(path, 'utf8');

module.exports = savedFile;