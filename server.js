const io = require('socket.io')(7890);

io.on('connection', socket => {
  socket.on('file-read', data => {
    socket.broadcast.emit('file-read', data);    
  });
  socket.on('file-write', data => {
    socket.broadcast.emit('file-write', data);
  });
  socket.on('file-saved', () => {
    console.log('saved');
  });
  socket.on('file-error', err => {
    console.log(err);
  });
});