const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const writeFile = require('./file-write');

writeFile(process.argv[2])
  .then(data => {
    socket.emit('file-write', data);
  })
  .catch(error => {
    socket.emit('file-error', error);
  });