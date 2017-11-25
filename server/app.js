const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const io = require('socket.io')(http);

const indexRouter = require('./routes/index');

app.use(express.static(path.join(__dirname, '../public')));
app.use('/', indexRouter);

io.on('connection', function(socket) {
    socket.on('stream', function(image) {
        socket.broadcast.emit('stream', image);
    })
});

const server = http.createServer(app);
server.listen(3000);
server.on('error', errorHandler);
server.on('listening', listenHandler);

function errorHandler(error) {
    console.log(error.message);
}

function listenHandler() {
    const address = server.address();
    console.log('listening to ' + address.port);
}


