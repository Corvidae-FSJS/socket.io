const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
//const readFile = require('./file-reader');
const toAllCaps = require('./stringCapitalizer');

// io.on('connection', socket => {
  socket.on('file-read', () => {
    console.log('butts');
      socket.emit('file-write', toAllCaps);
  });

// });