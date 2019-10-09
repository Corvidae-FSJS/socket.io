const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const readFile = require('./file-reader');

io.on(readFile, data => {
  socket.emit(process.argv[2]);
  console.log(data);
});

readfile(process.argv[2])
  .then(data => {
  //emit an event
  });



