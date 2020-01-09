const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const toAllCaps = require('./stringCapitalizer');

socket.on('file-read', data => {
  const caps = toAllCaps(data.data);
  socket.emit('file-write', { data: caps, path:data.path });
});