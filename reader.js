const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const readFile = require('./file-read');
const path = process.argv[2];

readFile(process.argv[2])
  .then(data => {
    socket.emit('file-read', { data, path });
  })
  .catch(err => {
    socket.emit('file-error', err);
  });



