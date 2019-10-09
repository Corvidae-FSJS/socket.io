const io = require('socket.io')(7890);

io.on('connection', socket => {
  socket.on('file-read', data => {
    console.log(data);
  });

  socket.broadcast.on('logger', data => {
    console.log(data);
  });
});


//Setup listeners for `file-read`, `file-write`, `file-saved`, and `file-error` events
//When they occur, broadcast the appropriate event and payload to clients