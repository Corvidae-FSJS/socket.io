const io = require('socket.io')(7890);

io.on('connection', socket => {
  socket.on('file-read', data => {
    socket.broadcast.emit('file-read', data);
  });
  socket.on('file-write', data => {
    socket.broadcast.emit('file-write', data);
  });
  socket.on('file-error', err => {
    console.log(err);
  });
  
  // socket.on('file-saved', saved => {
    //console.log(saved);
    //socket.broadcast.emit('file-saved', saved);
    // });
    
});

//Setup listeners for `file-read`, `file-write`, `file-saved`, and `file-error` events
//When they occur, broadcast the appropriate event and payload to clients