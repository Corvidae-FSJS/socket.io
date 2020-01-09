const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const writeFile = require('./file-write');

socket.on('file-write', data => {
  return writeFile(data.path, data.data)
    .then(()=> {
      socket.emit('file-saved');
    })
    .catch(err =>
      socket.emit('file-error', err));
});