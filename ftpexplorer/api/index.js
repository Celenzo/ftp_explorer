const express = require('express');
const http = require('http');
const _ = require('lodash');
const ftp = require('ftp');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const { Server } = require('socket.io', { cors: { origin: '*' }});
const io = new Server(server);


app.get('/', (req, res) => {
    res.send('<h1>FTP FileExplorer API</h1>').status(200);
});

io.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
  });

io.on('connection', socket => {
    console.log('New client connected to the API');

    socket.on("connect_error", (err) => {
        console.log(`connect_error due to ${err.message}`);
    });

    const ftpClient = new ftp();

    socket.on('ftp:dirlist', params => {
        ftpClient.list((err, list) => {
            socket.emit('ftp:dirlist', err ? err : list);
            if (err) throw err;
        });

        ftpClient.connect(params);
    });

    socket.on('disconnet', () => {
        console.log('Client disconnected from the API.', socket);
    });
});

server.listen(process.env.PORT || 8002, () => {
    console.log(`Server listening on port ${process.env.PORT || 8002}`);
});